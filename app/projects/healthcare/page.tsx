import { MobileNav } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HealthcarePage() {
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
                Healthcare Access &amp; Outcomes Disparities
              </h1>
              <p className="text-muted-foreground">
                Team data-analysis project · Jan 2025 – Mar 2025
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  TL;DR
                </h2>
                <p>
                  Led a team analysis of insurance-coverage disparities. We
                  cleaned and merged a large-scale dataset into 17 curated
                  variables, explored differences in preventive-care use, and
                  applied t-tests to quantify whether observed gaps were
                  statistically meaningful.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Problem
                </h2>
                <p>
                  Differences in insurance coverage and preventive-care
                  utilization are easy to observe descriptively, but decision
                  makers also need to know which gaps are large enough and
                  consistent enough to warrant attention.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  My Role
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Led the project workflow and analytical framing.</li>
                  <li>
                    Cleaned, merged, and documented the source data in pandas.
                  </li>
                  <li>
                    Helped reduce the data to 17 analysis-ready variables.
                  </li>
                  <li>
                    Performed exploratory analysis, visualization, and
                    hypothesis testing.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Approach
                </h2>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Audited data types, missing values, duplicate fields, and
                    merge keys across the source data.
                  </li>
                  <li>
                    Cleaned and combined the data into 17 curated variables
                    focused on insurance and preventive-care access.
                  </li>
                  <li>
                    Used pandas group-by aggregations to compare utilization
                    patterns across coverage groups.
                  </li>
                  <li>
                    Created Matplotlib and Seaborn visualizations to show the
                    magnitude and direction of the differences.
                  </li>
                  <li>
                    Applied t-tests to quantify differences in preventive-care
                    utilization rather than relying only on visual patterns.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Key Tradeoff
                </h2>
                <p>
                  We prioritized a smaller, well-documented set of variables
                  over a broad but shallow analysis. This made the comparisons
                  easier to interpret and reduced the risk of drawing
                  conclusions from inconsistent fields.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Deliverables
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Analysis-ready dataset with 17 curated variables</li>
                  <li>Documented pandas cleaning and merge workflow</li>
                  <li>Group-level exploratory analysis and visualizations</li>
                  <li>
                    Statistical test results for preventive-care utilization
                    differences
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  What I&apos;d Improve Next
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Add regression analysis to control for likely confounding
                    variables.
                  </li>
                  <li>
                    Test robustness across additional population and geographic
                    segments.
                  </li>
                  <li>
                    Build an interactive dashboard for non-technical
                    stakeholders.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "pandas",
                    "Matplotlib",
                    "Seaborn",
                    "t-tests",
                    "EDA",
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
