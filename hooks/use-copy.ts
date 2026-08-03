"use client";

import { useCallback, useState } from "react";
import { copyToClipboard } from "@/utils/clipboard";

/** Clipboard helper with brief copied state. */
export function useCopy(resetMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (value: string) => {
      const success = await copyToClipboard(value);
      if (success) {
        setCopied(true);
        window.setTimeout(() => setCopied(false), resetMs);
      }
      return success;
    },
    [resetMs],
  );

  return { copied, copy };
}
