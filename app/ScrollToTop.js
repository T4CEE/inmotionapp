"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Listen for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null; // This component does not render anything
};

export default ScrollToTop;
