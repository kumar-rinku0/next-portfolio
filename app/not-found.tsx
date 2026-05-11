import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col 'JetBrains Mono', 'JetBrains Mono Fallback'">
      <div className="pointer-events-none fixed top-0 left-0 z-50 h-12 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
      <main className="mx-auto flex w-full max-w-(--breakpoint-sm) flex-1 flex-col px-4 pt-8 pb-4 dark:text-white">
        <div className="flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="mb-0.5 text-slate-900 dark:text-slate-100">404</h1>
          <h2 className="text-2xl font-bold">Not Found</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Could not find requested resource
          </p>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
}
