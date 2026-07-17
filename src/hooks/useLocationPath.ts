import { useMemo } from "react";
import { usePathname } from "next/navigation";

const IGNORED_SEGMENTS = ["", "app", "dashboard"];

const isIdLike = (seg: string) =>
    /^[0-9]+$/.test(seg) || /^[0-9a-f-]{8,}$/i.test(seg);

const toTitleCase = (s: string) =>
    s
        .split(/[-_ ]+/)
        .filter(Boolean)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");

export const useLocationPath = () => {
    const pathname = usePathname();

    const pageName = useMemo(() => {
        if (!pathname || pathname === "/") return "Home";

        const segments = pathname
            .split("?")[0]
            .split("#")[0]
            .split("/")
            .filter(Boolean)
            .filter(seg => !IGNORED_SEGMENTS.includes(seg));

        if (!segments.length) return "Home";

        // pick the last meaningful segment (skip numeric/uuid-like ids)
        let target = segments[segments.length - 1];
        if (isIdLike(target) && segments.length > 1) {
            target = segments[segments.length - 2];
        }

        return toTitleCase(decodeURIComponent(target));
    }, [pathname]);

    return { pageName };
};
