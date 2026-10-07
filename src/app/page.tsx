import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { links } from "@/data/links";

export default function Home() {
  return (
    <div className="relative flex flex-1 items-start justify-center overflow-hidden bg-gradient-to-b from-[#fffaf4] via-[#fdf0e4] to-[#fbe2cd] px-6 py-20 sm:px-8 dark:from-[#1c1613] dark:via-[#211a16] dark:to-[#2a1f18]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/10"
      />
      <main className="relative flex w-full max-w-sm flex-col items-center gap-12">
        <Profile
          name="박종훈"
          bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
          photoUrl="https://placehold.co/150x150/orange/white"
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
