import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-highlight lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I like turning messy systems into questions that can be tested,
          measured, and explained clearly. My work sits at the intersection of
          data analysis, product thinking, and practical software development.
        </p>

        <p>
          I earned a{" "}
          <span className="font-medium text-highlight">
            B.S. in Informatics (Data Science Track)
          </span>{" "}
          from the{" "}
          <a
            href="https://www.washington.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-highlight hover:text-primary"
          >
            University of Washington
          </a>
          , graduating with a 3.87 GPA and Dean&apos;s List recognition for 9
          quarters. I will begin an{" "}
          <span className="font-medium text-highlight">
            M.P.S. in Data Science and Applied Statistics
          </span>{" "}
          at <span className="font-medium text-highlight">Cornell University</span>{" "}
          in September 2027.
        </p>

        <p>
          After completing a{" "}
          <span className="font-medium text-highlight">
            Growth &amp; Data Analyst internship
          </span>{" "}
          at <span className="font-medium text-highlight">TestSprite</span>, I
          am joining the team full time in 2026. During the internship, I built
          an internal marketing platform, ran A/B tests across content and
          outreach channels, and tracked hackathon acquisition across three
          seasons—helping identify top-converting communities and drive roughly
          2x growth.
        </p>

        <p>
          I also built{" "}
          <span className="font-medium text-highlight">CV Trail</span>, a
          full-stack AI résumé-tailoring tool using Next.js, Supabase,
          PostgreSQL, and the Claude API. Its core safeguard is structural:
          employers, titles, dates, and metrics come from database records, so
          the model can reframe real bullet points but cannot invent experience.
        </p>

        <p>
          For the{" "}
          <span className="font-medium text-highlight">
            Washington State Library Capstone
          </span>{" "}
          I analyzed Washington IT job-posting data and built four Tableau
          visualizations showing that 94% of jobs exceeded the family-wage
          threshold, with 30–50% wage growth from entry to mid level. I also led
          a healthcare disparities analysis that cleaned and merged a
          large-scale dataset into 17 curated variables for statistical testing.
        </p>

        <p>
          Earlier, at{" "}
          <span className="font-medium text-highlight">China Telecom</span> in
          Shenzhen, I analyzed cloud resources, vendor costs, drone route data,
          and user-testing evidence to support technical proposals and product
          prioritization. Before that, at{" "}
          <span className="font-medium text-highlight">
            Rastar Games
          </span>
          , I benchmarked 10+ games, built an RFM-style user segmentation model,
          and tracked acquisition, retention, engagement, and monetization KPIs.
        </p>

        <p>
          I&apos;m always open to conversations about{" "}
          <span className="font-medium text-highlight">
            growth analytics, product analytics, data science, and applied AI
          </span>{" "}
          work where careful analysis and engineering judgment both matter.
        </p>
      </div>
    </section>
  );
}
