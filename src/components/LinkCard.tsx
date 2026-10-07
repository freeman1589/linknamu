import type { LinkItem } from "@/types/link";

export default function LinkCard({ title, url, icon }: LinkItem) {
  const isExternal = !url.startsWith("mailto:");

  return (
    <a
      href={url}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex w-full items-center justify-center gap-2.5 rounded-[1.75rem] border border-white/60 bg-white/40 px-6 py-4 text-sm font-medium text-stone-800 shadow-[0_8px_24px_-14px_rgba(120,70,30,0.4)] backdrop-blur-md transition-colors duration-200 hover:border-white/90 hover:bg-white/55 active:scale-[0.985] dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:border-white/20 dark:hover:bg-white/[0.09]"
    >
      {icon &&
        (icon.startsWith("/") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={icon} alt="" aria-hidden className="h-[18px] w-[18px]" />
        ) : (
          <span aria-hidden className="text-base leading-none">
            {icon}
          </span>
        ))}
      {title}
      <span
        aria-hidden
        className="absolute right-6 text-stone-400/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-stone-500"
      >
        →
      </span>
    </a>
  );
}
