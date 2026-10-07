"use client";

import { useCallback, useEffect, useState } from "react";
import type { LinkItem } from "@/types/link";
import LinkCard from "./LinkCard";

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLinkClick = useCallback((id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onLinkClick={handleLinkClick}
        />
      ))}
    </div>
  );
}
