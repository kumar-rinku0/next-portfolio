import { Button } from "@/components/ui/button";
import { generalData } from "@/data/content";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="relative flex min-h-screen w-screen flex-col 'JetBrains Mono', 'JetBrains Mono Fallback'">
      <div className="pointer-events-none fixed top-0 left-0 z-50 h-12 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
      <main className="mx-auto flex w-full max-w-(--breakpoint-sm) flex-1 flex-col px-4 pt-8 pb-4 dark:text-white">
        <Link
          href="/"
          className="my-12 inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:text-slate-800"
        >
          <Button variant="outline" size="sm">
            <Undo2 />
          </Button>
        </Link>

        <h3 className="text-slate-900 dark:text-slate-100">Projects</h3>
        <div className="my-4">
          <ul className="text-slate-600 dark:text-slate-300 flex flex-col gap-1">
            {generalData.projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.link}
                  target={project.linkTaget}
                  rel="noopener noreferrer"
                  className="underline decoration-1 decoration-dotted underline-offset-2 hover:text-slate-800 inline-flex"
                >
                  {project.name}
                </a>
                <span>&nbsp;-&nbsp;</span>
                <span className="text-sm">{project.slogn}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
