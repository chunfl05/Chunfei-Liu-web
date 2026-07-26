import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DublooPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24 pb-20">
          <Link
            href="/projects"
            className="group mb-8 inline-flex items-center font-medium text-primary hover:text-highlight"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Projects
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-highlight mb-2">
                Dubloo — Restroom Accessibility Platform
              </h1>
              <p className="text-muted-foreground">
                Building interactive sorting and filtering for accessibility needs
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  TL;DR
                </h2>
                <p>
                  Built interactive sorting and filtering for a restroom accessibility 
                  web app. Improved mobile responsiveness and collaborated to resolve 
                  UI disagreements. Used multi-factor scoring to surface the most 
                  relevant accessibility information.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Problem
                </h2>
                <p>
                  People with accessibility needs struggle to find restrooms that meet 
                  their specific requirements. Existing solutions don&apos;t allow users 
                  to efficiently filter and prioritize based on multiple accessibility factors.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  My Role
                </h2>
                <p>
                  Front-end developer responsible for sorting/filtering interactions, 
                  responsive layout improvements, and team collaboration on UI decisions.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Approach
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">Understood requirements:</span>{" "}
                    Reviewed accessibility factors users care about (wheelchair access, 
                    changing tables, grab bars).
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Designed interaction model:</span>{" "}
                    Mapped out how users would filter and sort results based on multiple criteria.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Built sorting/filtering in JavaScript:</span>{" "}
                    Implemented interactive controls that update results in real-time.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Improved responsive layout:</span>{" "}
                    Adjusted CSS to ensure the interface works well on mobile devices.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Resolved UI disagreements:</span>{" "}
                    Facilitated direct discussions to reach consensus on layout decisions.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Implemented multi-factor scoring:</span>{" "}
                    Created a scoring system that weighs multiple accessibility attributes to rank results.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Key Tradeoff
                </h2>
                <p>
                  Balancing filter complexity with usability—too many options overwhelm 
                  users, too few limit usefulness. We settled on{" "}
                  <span className="font-medium text-highlight">progressive disclosure</span>: 
                  common filters visible, advanced options expandable.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Solution
                </h2>
                <p className="mb-3">Delivered a web interface where users can:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Filter restrooms by specific accessibility features</li>
                  <li>Sort results by relevance using multi-factor scoring</li>
                  <li>View results on any device with responsive layout</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  What I&apos;d Improve Next
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Add user location integration to prioritize nearby results</li>
                  <li>Implement saved preferences so returning users don&apos;t re-enter filters</li>
                  <li>Conduct more user testing with people who have accessibility needs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "CSS", "Responsive Design", "UI/UX Collaboration"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
