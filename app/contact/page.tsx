import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "camellialiu05@gmail.com",
    href: "mailto:camellialiu05@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/chunfei-liu-ab59412b8/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/chunfl05",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24 pb-20">
          <section aria-label="Contact">
            <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="max-w-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always open to conversations about{" "}
                  <span className="font-medium text-highlight">
                    growth analytics, product analytics, data science, and
                    applied AI
                  </span>{" "}
                  work. If your team is solving an interesting data or product
                  problem, I&apos;d be glad to connect and learn more.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={
                      method.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      method.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-secondary/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-muted-foreground">
                        {method.label}
                      </div>
                      <div className="text-highlight group-hover:text-primary transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </a>
                ))}
              </div>

              <div className="mt-12 rounded-lg border border-border p-6 bg-secondary/20">
                <h3 className="text-lg font-semibold text-highlight mb-3">
                  Open to Coffee Chats
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Open to coffee chats, informational interviews, or referrals.
                  I&apos;m happy to share more about my projects or hear about
                  what your team is working on.
                </p>
              </div>

              <div className="mt-8 text-sm text-muted-foreground">
                <p>
                  Currently based in{" "}
                  <span className="font-medium text-highlight">
                    Seattle, WA
                  </span>
                  .
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
