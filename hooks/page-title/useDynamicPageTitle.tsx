"use client";

import { useEffect } from "react";
import { usePageTitle } from "./usePageTitle";

export function useDynamicPageTitle() {
  const pageTitle = usePageTitle();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  return pageTitle;
}