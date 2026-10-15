import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae of ${DATA.name}, ${DATA.tagline}.`,
};

function stripMarkdown(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-neutral-500">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function CVPage() {
  const contacts = [
    { label: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
    { label: displayUrl(DATA.url), href: DATA.url },
    {
      label: displayUrl(DATA.contact.social.LinkedIn.url),
      href: DATA.contact.social.LinkedIn.url,
    },
    {
      label: displayUrl(DATA.contact.social.GitHub.url),
      href: DATA.contact.social.GitHub.url,
    },
  ];

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between print:hidden">
        <h1 className="text-xl font-bold">Curriculum Vitae</h1>
        <a
          href={DATA.cvPdfUrl}
          download
          className={cn(buttonVariants({ size: "sm" }), "gap-2")}
        >
          <DownloadIcon className="size-4" />
          Download PDF
        </a>
      </div>

      <article className="rounded-lg border bg-white p-8 text-[13px] leading-relaxed text-neutral-800 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-950">
            {DATA.name}
          </h1>
          <p className="text-base font-medium text-neutral-700">
            {DATA.tagline}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-600">
            <span>{DATA.location}</span>
            {contacts.map((contact) => (
              <a key={contact.href} href={contact.href} className="underline">
                {contact.label}
              </a>
            ))}
          </p>
        </header>

        <Section title="Summary">
          {DATA.summary.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{stripMarkdown(paragraph)}</p>
          ))}
        </Section>

        <Section title="Work Experience">
          {DATA.work.map((work) => (
            <div key={work.company} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold text-neutral-950">
                  {work.title}
                  <span className="font-normal text-neutral-600">
                    {" "}
                    · {work.company}
                  </span>
                </h3>
                <span className="shrink-0 text-xs tabular-nums text-neutral-500">
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
              <p className="text-xs text-neutral-500">{work.location}</p>
              <p className="mt-1">{work.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Selected Projects">
          {DATA.projects.map((project) => {
            const link = (project.links as readonly { href: string }[])[0];
            return (
              <div key={project.title} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-neutral-950">
                    {project.title}
                    {link && (
                      <a
                        href={link.href}
                        className="ml-2 text-xs font-normal text-neutral-500 underline"
                      >
                        {displayUrl(link.href)}
                      </a>
                    )}
                  </h3>
                  <span className="shrink-0 text-xs tabular-nums text-neutral-500">
                    {project.dates}
                  </span>
                </div>
                <p className="mt-1">{project.description}</p>
                <p className="mt-1 text-xs text-neutral-500">
                  {project.technologies.join(" · ")}
                </p>
              </div>
            );
          })}
        </Section>

        <Section title="Skills">
          <p>{DATA.skills.join(" · ")}</p>
        </Section>

        <Section title="Education">
          {DATA.education.map((education) => (
            <div
              key={education.school}
              className="flex items-baseline justify-between gap-4 break-inside-avoid"
            >
              <div>
                <h3 className="font-semibold text-neutral-950">
                  {education.school}
                </h3>
                <p>{education.degree}</p>
              </div>
              <span className="shrink-0 text-xs tabular-nums text-neutral-500">
                {education.start} - {education.end}
              </span>
            </div>
          ))}
        </Section>
      </article>
    </main>
  );
}
