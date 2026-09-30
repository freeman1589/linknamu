import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { links } from "@/data/links";

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        <Profile name="홍길동" bio="한 줄 소개를 입력해주세요" />
        <LinkList links={links} />
      </main>
    </div>
  );
}
