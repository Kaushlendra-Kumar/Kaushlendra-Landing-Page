import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">

      {/* ✅ Hero Section */}
      <section className="pt-4 pb-0 text-center flex flex-col items-center space-y-4">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-4xl sm:text-5xl font-extrabold"
          text={DATA.name}
        />

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl px-4 leading-relaxed text-center mx-auto">
            Building backend systems, API Integration & scalable systems.
            <br />
            making systems faster, leaner, and harder to break.
          </p>
        </BlurFade>
      </section>

      {/* ✅ Work Experience */}
      <section id="work">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>

          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ✅ Education Section */}
      <section id="education">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ✅ Projects Section */}
      <section id="projects">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Projects</h2>
          </BlurFade>

          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <ResumeCard
                logoUrl={(project as any).logoUrl ?? "/project.png"} // fallback if no logo
                altText={project.title}
                title={project.title}
                subtitle={project.description}
                href={project.href}
                badges={project.technologies}
                period={project.dates}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ✅ Achievements Section */}
      <section id="achievements">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Achievements</h2>
          </BlurFade>

          {DATA.achievements.map((ach, id) => (
            <BlurFade key={ach.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ResumeCard
                logoUrl={(ach as any).logoUrl ?? "/award.png"} // fallback
                altText={ach.title}
                title={ach.title}
                subtitle={ach.description}
                href={ach.url}
                period={ach.date}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ✅ Skills */}
      <section id="skills" className="pb-24">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
