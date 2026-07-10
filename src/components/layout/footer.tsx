import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/effects/fade-in";
import {
  contactEmail,
  linkedInUrl,
  githubUrl,
} from "@/data/site";

const footerLinks = [
  {
    label: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: linkedInUrl,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: githubUrl,
    icon: GitHubIcon,
    external: true,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]" role="contentinfo">
      <div className="section-padding !py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <Link
                  href="#home"
                  className="text-xl font-semibold tracking-tight text-foreground"
                >
                  Deepika<span className="text-accent">.</span>
                </Link>
                <p className="mt-2 text-muted text-sm">
                  Python Backend Developer
                </p>
              </div>

              <nav aria-label="Social links">
                <ul className="flex items-center gap-6">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-300"
                        aria-label={link.label}
                      >
                        <link.icon size={18} />
                        <span className="text-sm hidden sm:inline">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
              <p>&copy; {currentYear} Deepika. All rights reserved.</p>
              <p className="text-xs">
                Crafted with precision. Built for performance.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
