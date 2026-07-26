import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "CV Trail — AI Resume-Tailoring Tool",
    description:
      "Built and deployed a full-stack résumé-tailoring tool with a seven-table PostgreSQL schema, row-level security, Claude API pipelines, and deterministic guardrails that prevent fabricated employers, dates, or metrics.",
    tools: ["Next.js", "Supabase", "PostgreSQL", "Claude API"],
    href: "/projects/cv-trail",
    featured: true,
  },
  {
    title: "Washington State Library — Certification Guidance Capstone",
    description:
      "Analyzed Washington IT job-posting data and built four Tableau visualizations showing that 94% of jobs exceeded the family-wage threshold and wages grew 30–50% from entry to mid level. Validated a Figma prototype through an expert interview and librarian usability testing.",
    tools: ["Tableau", "SQL", "Figma", "Data Analysis"],
    href: "/projects/washington-state-library",
    featured: true,
  },
  {
    title: "Healthcare Access & Outcomes Disparities",
    description:
      "Led a team analysis of insurance coverage disparities, cleaning and merging a large dataset into 17 curated variables and using group-by analysis, statistical tests, and visualizations to quantify differences in preventive care utilization.",
    tools: ["Python", "pandas", "t-tests", "Data Visualization"],
    href: "/projects/healthcare",
    featured: true,
  },
  {
    title: "China Telecom — AI Proposals & Drone Dashboard",
    description:
      "Authored three AI-module proposals using cloud resource and vendor-cost analysis, analyzed drone flight data for dynamic route re-planning, and translated user-testing data into requirements and prioritization decisions.",
    tools: ["Business Analysis", "Requirements", "Data Analysis"],
    href: "/projects/china-telecom",
    featured: true,
  },
  {
    title: "EduHear — Audio-First Learning Platform",
    description:
      "Led database schema design and end-to-end product development for an audio-learning platform serving students, instructors, and institutions. Wrote multi-table SQL queries and reusable views to power role-specific dashboards.",
    tools: ["SQL", "Database Design", "Dashboards", "Product Strategy"],
    href: "/projects/eduhear",
    featured: true,
  },
  {
    title: "Dubloo — Restroom Accessibility Platform",
    description:
      "Built interactive sorting and filtering for a restroom accessibility web app, improved mobile responsiveness, and used multi-factor scoring to surface the most relevant accessibility information.",
    tools: ["JavaScript", "CSS", "Responsive Design", "UI/UX"],
    href: "/projects/dubloo",
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section aria-label="All projects">
            <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
              All Projects
            </h2>

            <div className="group/list space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
