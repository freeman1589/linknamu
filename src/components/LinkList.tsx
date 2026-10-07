import type { LinkItem } from "@/types/link";
import LinkCard from "./LinkCard";

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </div>
  );
}
