import { MobileNav } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CvTrailPage() {
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
                CV Trail — AI Resume-Tailoring Tool
              </h1>
              <p className="text-muted-foreground">
                Sole designer and developer · June 2026
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  TL;DR
                </h2>
                <p>
                  Designed, built, and deployed a full-stack tool that tailors
                  my résumé to a job description. CV Trail selects relevant
                  experiences from a structured Experience Bank, rewrites only
                  the bullet wording, highlights matching keywords, and
                  produces compile-ready LaTeX for my existing résumé template.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  The Problem
                </h2>
                <p>
                  Tailoring a résumé by hand is repetitive, but many existing
                  tools encourage keyword stuffing or regenerate a lower-quality
                  document. I wanted a tool that fit my LaTeX workflow and could
                  adapt real experience to a role without inventing employers,
                  dates, skills, or metrics.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Product Scope
                </h2>
                <p>
                  Competitive research showed that résumé tooling is already a
                  mature market. Instead of chasing feature parity, I scoped CV
                  Trail as a focused, single-user tool I would genuinely use
                  and as an end-to-end engineering project. Multi-tenant
                  accounts, auto-apply, and OAuth-heavy features were
                  intentionally left out.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  System Architecture
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Next.js App Router for the interface and server-side API
                    routes
                  </li>
                  <li>
                    Supabase Postgres, cookie-based Auth, and private file
                    Storage
                  </li>
                  <li>
                    Seven-table data model separating experiences, applications,
                    résumés, and tailoring runs
                  </li>
                  <li>
                    Row-level security on every user-owned table using{" "}
                    <code className="rounded bg-secondary/50 px-1 py-0.5 text-xs">
                      auth.uid()
                    </code>
                  </li>
                  <li>
                    Claude API pipelines for job extraction, résumé parsing,
                    tailoring, and cover-letter drafting
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Structural Anti-Fabrication
                </h2>
                <p className="mb-3">
                  The core safeguard is enforced by code rather than by asking
                  the model to be truthful:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Company names, titles, dates, and section order are rendered
                    deterministically from database rows.
                  </li>
                  <li>
                    The model receives bullet content only, so it cannot output
                    a new employer or alter a date.
                  </li>
                  <li>
                    Keyword bolding only wraps text already present in a real
                    bullet; unmatched terms are skipped.
                  </li>
                  <li>
                    The model ranks experiences, while hard rules keep education
                    and current employment non-removable.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Validation
                </h2>
                <p>
                  I held the Experience Bank constant and varied only the job
                  description between data-science and marketing roles. The
                  resulting résumés selected different experiences, reframed
                  the same facts for each audience, and reordered skills without
                  changing any title, date, or metric. This confirmed that the
                  output was JD-driven without fabricating content.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Engineering Problems I Debugged
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Replaced a PDF parser that crashed under Next.js server
                    bundling with a serverless-compatible extraction library.
                  </li>
                  <li>
                    Fixed UTC parsing of date-only values that shifted displayed
                    dates back one day in Pacific time.
                  </li>
                  <li>
                    Added an environment-gated development sign-in flow after
                    magic-link email limits blocked local testing.
                  </li>
                  <li>
                    Pivoted from direct PDF generation to escaped,
                    compile-ready LaTeX to preserve résumé typography and
                    template fidelity.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Honest Limitations
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    The primary output is LaTeX because HTML-to-PDF cannot match
                    the source template exactly.
                  </li>
                  <li>
                    Raw résumé uploads have weaker anti-fabrication guarantees
                    than the structured Experience Bank path.
                  </li>
                  <li>
                    The application is intentionally scoped to personal,
                    single-user use.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  What I&apos;d Build Next
                </h2>
                <p>
                  Track response rates by résumé version and keyword-match
                  score, then turn the analytics view into a real application
                  funnel for testing which tailoring choices lead to interviews.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-semibold text-highlight">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Supabase",
                    "PostgreSQL",
                    "Row-Level Security",
                    "Claude API",
                    "LaTeX",
                    "Vercel",
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
