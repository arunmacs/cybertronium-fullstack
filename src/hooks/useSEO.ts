import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { seoConfig } from "@/config/seoConfig";

const updateMetaTag = (selector: string, attribute: string, value: string, createIfMissing: boolean = true) => {
  let element = document.querySelector(selector);
  if (!element && createIfMissing) {
    element = document.createElement("meta");
    if (selector.startsWith('meta[name="')) {
      element.setAttribute("name", selector.match(/meta\[name="([^"]+)"\]/)?.[1] || "");
    } else if (selector.startsWith('meta[property="')) {
      element.setAttribute("property", selector.match(/meta\[property="([^"]+)"\]/)?.[1] || "");
    }
    document.head.appendChild(element);
  }
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

export interface SEOOverrides {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>;
}

export const useSEO = (overrides?: SEOOverrides) => {
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname.toLowerCase() || "/";
    const normalizedPath = currentPath !== "/" && currentPath.endsWith("/") 
      ? currentPath.slice(0, -1) 
      : currentPath;

    const config = seoConfig[normalizedPath] || seoConfig["default"];

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com";
    const fullUrl = `${baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
    updateLinkTag("canonical", fullUrl);

    const title = overrides?.title || config?.title;
    if (title) {
      // NOTE: document.title is intentionally NOT mutated here.
      // Next.js App Router owns the <title> tag via server-side `metadata`/`generateMetadata`.
      // We only update OG + Twitter card tags for client-side navigation enhancement.
      updateMetaTag('meta[property="og:title"]', "content", title);
      updateMetaTag('meta[name="twitter:title"]', "content", title);
    }
    
    const description = overrides?.description || config?.description;
    if (description) {
      updateMetaTag('meta[name="description"]', "content", description);
      updateMetaTag('meta[property="og:description"]', "content", description);
      updateMetaTag('meta[name="twitter:description"]', "content", description);
    }

    const image = overrides?.image || "/android-chrome-512x512.png";
    updateMetaTag('meta[property="og:image"]', "content", image);
    updateMetaTag('meta[name="twitter:image"]', "content", image);

    const type = overrides?.type || "website";
    updateMetaTag('meta[property="og:type"]', "content", type);

    updateMetaTag('meta[property="og:url"]', "content", fullUrl);

    // Handle Structured Data (JSON-LD)
    if (overrides?.schema) {
      let script = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-dynamic", "true");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(overrides.schema);
    } else {
      // Remove dynamic schema if not provided for this page
      const script = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
      if (script) {
        script.remove();
      }
    }

  }, [pathname, overrides?.title, overrides?.description, overrides?.image]); // Re-run if overrides change
};
