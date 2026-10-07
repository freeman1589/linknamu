interface ProfileProps {
  name: string;
  bio: string;
  photoUrl?: string;
}

export default function Profile({ name, bio, photoUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full ring-[6px] ring-white/80 shadow-[0_14px_30px_-10px_rgba(190,110,50,0.5),0_2px_6px_rgba(0,0,0,0.06)] dark:ring-white/10 dark:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.55)]">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-stone-100 text-3xl font-semibold text-stone-400 dark:bg-stone-900 dark:text-stone-600">
            {name.charAt(0)}
          </div>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/55 via-white/0 to-black/10 mix-blend-overlay"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {name}
        </h1>
        <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
          {bio}
        </p>
      </div>
    </div>
  );
}
