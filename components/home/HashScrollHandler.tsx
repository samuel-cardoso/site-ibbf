"use client"

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils";

export default function HashScrollHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    const performScroll = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            smoothScrollTo(hash);
          } else {
            setTimeout(() => {
              smoothScrollTo(hash);
            }, 300);
          }
        });
      });
    };

    if (document.readyState === "complete") {
      performScroll();
    } else {
      window.addEventListener("load", performScroll, { once: true });

      const timer = setTimeout(performScroll, 500);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", performScroll);
      };
    }
  }, []);

  return null;
}
