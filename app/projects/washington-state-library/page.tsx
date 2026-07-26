import { MobileNav } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WashingtonStateLibraryPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pb-20 pt-24 lg:w-1/2 lg:py-24">
          <Link
            href="/projects"
            className="group mb-8 inline-flex items-center font-medium text-primary hover:text-highlight"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Projects
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-highlight">
                Washington State Library — Certification Guidance Capstone
              </h1>
              <p className="text-muted-foreground">
                Government-sponsored Capstone · Jan 2026 – Jun 2026
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  TL;DR
                </h2>
                <p>
                  Served as Data Analyst on a government-sponsored Capstone,
                  using Washington IT job-posting data to evaluate which
                  certifications create meaningful value for adult learners. I
                  combined Tableau analysis with an expert interview and
                  librarian usability testing to inform a certification-guidance
                  prototype and recommendation framework.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Problem
                </h2>
                <p>
                  Adult learners need clearer evidence about whether a
                  certification leads to a family-supporting wage or a realistic
                  career pathway. Libraries also need a practical way to decide
                  which credentials to explain, promote, or support.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  My Role
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Structured and analyzed Washington IT job-posting data
                    covering certifications, requirements, salaries, geography,
                    and career level.
                  </li>
                  <li>
                    Built four Tableau visualizations: a salary box plot,
                    requirement heatmap, geographic heatmap, and career-pathway
                    chart.
                  </li>
                  <li>
                    Helped validate a Figma-prototyped guidance tool through an
                    expert interview and usability testing with librarians.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Approach
                </h2>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Cleaned and structured job-posting fields so salaries,
                    certification requirements, locations, and career levels
                    could be compared consistently.
                  </li>
                  <li>
                    Used a salary box plot and requirement heatmap to show the
                    relationship between certification demand and compensation.
                  </li>
                  <li>
                    Compared wages with the family-wage threshold and used a
                    geographic heatmap to show where opportunities were
                    concentrated.
                  </li>
                  <li>
                    Built a career-pathway view to compare entry- and mid-level
                    compensation.
                  </li>
                  <li>
                    Combined quantitative findings with expert and librarian
                    feedback to refine the guidance experience and final
                    recommendations.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Key Findings
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    94% of analyzed jobs exceeded the family-wage threshold.
                  </li>
                  <li>
                    Compensation increased approximately 30–50% from entry- to
                    mid-level roles.
                  </li>
                  <li>
                    Certification requirements, salary outcomes, and geography
                    need to be shown together to support useful learner
                    decisions.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Deliverables
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Four decision-focused Tableau visualizations</li>
                  <li>Structured analysis of certification and wage signals</li>
                  <li>Figma prototype for certification guidance</li>
                  <li>
                    Recommendation framework informed by data and librarian
                    feedback
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  What I&apos;d Improve Next
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Expand the job-posting sample and automate recurring data
                    collection.
                  </li>
                  <li>
                    Pilot the guidance experience in a live library environment
                    and measure which information learners use.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Tableau",
                    "SQL",
                    "Figma",
                    "Job-Posting Analysis",
                    "Usability Testing",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tool}
                    </span>
                  ))}
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
