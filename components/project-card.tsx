import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  href: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tools,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <Link
            href={href}
            className="inline-flex items-baseline font-medium leading-tight text-highlight hover:text-primary focus-visible:text-primary group/link text-base"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {title}
              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
            </span>
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tools.map((tool) => (
            <li key={tool} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                {tool}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
