import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EduHearPage() {
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
                EduHear — Audio-First Learning Platform
              </h1>
              <p className="text-muted-foreground">
                Course project · Oct 2025 – Dec 2025
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  TL;DR
                </h2>
                <p>
                  Led database schema design and end-to-end product development
                  for EduHear, an audio-first learning platform serving
                  students, instructors, and institutions—from wireframing to
                  relational data modeling to stakeholder-facing analysis.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Problem
                </h2>
                <p>
                  Audio-learning products need to serve three very different
                  audiences at once—students tracking their own progress,
                  instructors monitoring engagement across a course, and
                  institutions evaluating platform-wide performance—without a
                  data model or dashboards designed to support all three views.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  My Role
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Led database schema design and relational data modeling</li>
                  <li>
                    Owned end-to-end product development from wireframing
                    through delivery
                  </li>
                  <li>
                    Synthesized platform metrics into a data-driven business
                    case for stakeholders
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Approach
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">
                      Modeled the data:
                    </span>{" "}
                    Designed a relational schema to represent creators,
                    lessons, instructors, and students across the platform.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Wrote reusable queries:
                    </span>{" "}
                    Built SQL queries with multi-table JOINs, aggregations,
                    and CASE logic, and packaged them into reusable views such
                    as{" "}
                    <code className="rounded bg-secondary/50 px-1 py-0.5 text-xs">
                      instructor_lesson_engagement
                    </code>{" "}
                    and{" "}
                    <code className="rounded bg-secondary/50 px-1 py-0.5 text-xs">
                      student_lesson_progress
                    </code>
                    .
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Powered role-specific dashboards:
                    </span>{" "}
                    Used those views to track engagement, completion rates,
                    lesson depth, and listening progress for each audience.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Built the business case:
                    </span>{" "}
                    Analyzed metrics across creator productivity, content
                    catalog breadth, lesson depth, and premium subscription
                    revenue, then synthesized findings for stakeholders.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Deliverables
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Relational database schema for the platform</li>
                  <li>
                    Reusable SQL views powering role-specific engagement
                    dashboards
                  </li>
                  <li>
                    Data-driven business case covering productivity, catalog
                    depth, and subscription revenue
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  What I&apos;d Improve Next
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Add cohort-based retention views to track engagement over
                    time, not just point-in-time snapshots
                  </li>
                  <li>
                    Extend the schema to support A/B testing of lesson formats
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Database Design", "Dashboards", "Product Strategy"].map(
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
