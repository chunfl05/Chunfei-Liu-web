import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";

const skillCategories = [
  {
    title: "Product Operations & Community Growth",
    description:
      "Connect community campaigns, user feedback, and partner outreach with product decisions.",
    proof:
      "At MuleRun (Alibaba), I grew a user community from 0 to 115 members and helped increase platform registrations by 5% in three weeks. I analyzed feedback on AI agent products, produced comparative research, and standardized partner outreach to reduce average outreach time by 10%.",
    skills: ["Product Operations", "UGC Campaigns", "User Feedback Analysis", "Partner Outreach"],
  },
  {
    title: "Growth & Product Analytics",
    description:
      "Turn acquisition, engagement, and conversion data into experiments and operating decisions.",
    proof:
      "At TestSprite, I ran A/B tests across creator content and outreach channels, tracked hackathon sign-ups across three seasons to identify top-converting communities and drive roughly 2x growth, and wrote SQL/Python scripts to clean the creator database.",
    skills: ["A/B Testing", "SQL", "Python", "Growth Analytics"],
  },
  {
    title: "Statistical Analysis & Visualization",
    description:
      "Clean and structure data, test hypotheses, and communicate the size and direction of meaningful differences.",
    proof:
      "For the Washington State Library, I built four Tableau visualizations showing that 94% of analyzed jobs exceeded the family-wage threshold and wages grew 30–50% from entry to mid level. For a healthcare study, I merged a large dataset into 17 curated variables and applied t-tests to preventive-care disparities.",
    skills: ["pandas", "t-tests", "ANOVA", "Tableau", "Matplotlib"],
  },
  {
    title: "Full-Stack & AI Systems",
    description:
      "Build data-backed applications that combine product interfaces, secure databases, APIs, and LLM workflows.",
    proof:
      "I built and deployed CV Trail with Next.js, Supabase, a seven-table PostgreSQL schema, row-level security, and Claude API pipelines. Deterministic rendering keeps employers, dates, and metrics outside the model's control, preventing fabricated résumé claims.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Claude API"],
  },
  {
    title: "Research & Technical Communication",
    description:
      "Translate technical evidence into requirements, recommendations, and decisions for mixed audiences.",
    proof:
      "At China Telecom, I authored three AI-module proposals using cloud-resource and vendor-cost analysis, evaluated user-testing data for App requirements, and analyzed historical drone routes. For the library Capstone, I combined an expert interview and librarian usability testing with quantitative job-market analysis.",
    skills: ["Requirements Analysis", "Proposal Writing", "Figma", "Usability Testing"],
  },
];

const toolsList = {
  Programming: [
    "Python (pandas, Matplotlib, Seaborn)",
    "SQL",
    "R",
    "MATLAB",
    "JavaScript / TypeScript",
    "HTML / CSS",
    "p5.js",
  ],
  "Statistical Methods": ["t-tests", "ANOVA", "A/B Testing"],
  "Data & Visualization": ["Tableau", "Power BI", "Excel", "Figma"],
  "Tools & Platforms": [
    "PostgreSQL",
    "Supabase",
    "Next.js",
    "Git / GitHub",
    "Linux / Bash",
  ],
  "Spoken Languages": ["Mandarin", "English"],
};

export default function SkillsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24 pb-20">
          <section aria-label="Skills">
            <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
              Capabilities
            </h2>

            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg border border-border p-6 transition-colors hover:border-primary/30 hover:bg-secondary/30"
                >
                  <h3 className="text-lg font-semibold text-highlight mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-highlight">What I can do:</span>{" "}
                    {category.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-highlight">Proof:</span>{" "}
                    {category.proof}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
                Tools & Technologies
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {Object.entries(toolsList).map(([category, tools]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-highlight mb-3">
                      {category}
                    </h3>
                    <ul className="space-y-1">
                      {tools.map((tool) => (
                        <li key={tool} className="text-sm text-muted-foreground">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
