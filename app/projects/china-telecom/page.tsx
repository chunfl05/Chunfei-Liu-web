import { MobileNav } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ChinaTelecomPage() {
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
                China Telecom — AI Proposals &amp; Drone Route Analysis
              </h1>
              <p className="text-muted-foreground">
                Business Analyst internship · Jul 2025 – Sep 2025
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  TL;DR
                </h2>
                <p>
                  Worked across three analysis tracks: AI-module proposals for
                  an education cloud product, drone route analysis for a
                  medicine-delivery monitoring system, and requirements
                  analysis for App modules involving multiple departments.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  AI Module Proposals
                </h2>
                <p>
                  Authored three technical proposals by comparing cloud resource
                  usage with vendor costs. The analysis helped frame which
                  solutions were feasible, cost-effective, and defensible to
                  technical and business stakeholders.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Drone Route Analysis
                </h2>
                <p>
                  Analyzed historical flight and route data for an urban
                  medicine-delivery monitoring system. The work informed
                  dynamic route re-planning and optimal-path calculation rather
                  than treating route display as a purely visual dashboard
                  problem.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Requirements Analysis
                </h2>
                <p>
                  Analyzed user-testing data and benchmarked design complexity
                  for App modules involving Wanda and China Tietong. I translated
                  those findings into requirements and prioritization inputs for
                  cross-department planning.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  How I Worked
                </h2>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Defined the operational or business question before
                    choosing the analysis.
                  </li>
                  <li>
                    Compared internal data with external vendor or design
                    constraints.
                  </li>
                  <li>
                    Documented assumptions, tradeoffs, and feasible solution
                    paths.
                  </li>
                  <li>
                    Presented evidence in a form that both technical and
                    non-technical stakeholders could use.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  What This Experience Demonstrates
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Cost- and resource-aware technical proposal writing</li>
                  <li>Analysis of historical route and flight data</li>
                  <li>User-testing synthesis and requirements definition</li>
                  <li>
                    Communication across software, product, and business teams
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Tools &amp; Methods
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Business Analysis",
                    "Requirements Analysis",
                    "Cost Comparison",
                    "Route Data Analysis",
                    "Technical Proposals",
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
