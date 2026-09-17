interface EducationItemProps {
  dateRange: string;
  degree: string;
  school: string;
  schoolUrl?: string;
  location: string;
  details: string[];
}

function EducationItem({
  dateRange,
  degree,
  school,
  schoolUrl,
  location,
  details,
}: EducationItemProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50" />

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {dateRange}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-highlight">
          <a
            href={schoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline font-medium leading-tight text-highlight hover:text-primary focus-visible:text-primary group/link"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>{school}</span>
          </a>
        </h3>

        <p className="mt-1 text-sm italic leading-normal text-muted-foreground">
          {degree} · {location}
        </p>

        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal text-muted-foreground">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EducationSection() {
  const education: EducationItemProps[] = [
    {
      dateRange: "Expected graduation: May 2028",
      degree: "M.P.S. in Data Science and Applied Statistics",
      school: "Cornell University",
      schoolUrl: "https://www.cornell.edu",
      location: "Ithaca, NY",
      details: [],
    },
    {
      dateRange: "Sep 2023 — Jun 2026",
      degree: "B.S. in Informatics — Data Science Track",
      school: "University of Washington",
      schoolUrl: "https://www.washington.edu",
      location: "Seattle, WA",
      details: [
        "GPA 3.87/4.00 · Dean's List for 9 quarters",
        "Coursework: Database & Data Modeling, Data Science Methods, Statistical Methods, Interactive Data Visualization, Data Programming, Client-Side Web Development, Product & Information Systems Management",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-highlight lg:sr-only">
          Education
        </h2>
      </div>

      <div className="group/list">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
}
