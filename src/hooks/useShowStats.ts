import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";;

export const useShowStats = (showStats: boolean) => {
  const [path, setPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  const excludedStats = ["/contact", "/ctem",];

  const isExcluded = excludedStats.some(prefix => path.startsWith(prefix));

  return showStats && !isExcluded;
};
