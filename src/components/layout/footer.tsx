import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/brand-icons";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/effects/fade-in";
import {
  contactEmail,
  footerQuickLinks,
  linkedInUrl,
  siteConfig,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]" role="contentinfo">
      <div className="section-padding !py-14 sm:!py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              <div className="text-center md:text-left">
                <Link
                  href="#home"
                  className="text-xl font-semibold tracking-tight text-foreground"
                >
                  Deepika TK<span className="text-accent">.</span>
                </Link>
                <p className="mt-2 text-sm font-medium text-foreground/80">
                  {siteConfig.role}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted md:mx-0 mx-auto">
                  {siteConfig.tagline}
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                  Quick Links
                </h3>
                <ul className="mt-5 flex flex-col items-center gap-3">
                  {footerQuickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-right">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                  Connect
                </h3>
                <ul className="mt-5 flex flex-col items-center gap-4 md:items-end">
                  <li>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                    >
                      <LinkedInIcon size={16} />
                      LinkedIn
                    </a>
                  </li>
                  <li className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted">
                    <MapPin size={16} />
                    Location
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="text-center text-sm text-muted sm:text-left">
              <p>&copy; 2026 Deepika TK. All Rights Reserved.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
