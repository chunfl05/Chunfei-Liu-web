import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/chunfl05",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/chunfei-liu-ab59412b8/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:camellialiu05@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
