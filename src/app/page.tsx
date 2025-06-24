
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ProfileSummary } from '@/components/sections/ProfileSummary';
import { WorkExperience } from '@/components/sections/WorkExperience';
import { Education } from '@/components/sections/Education';
import { SkillsShowcase } from '@/components/sections/SkillsShowcase';
import { CertificationsDisplay } from '@/components/sections/CertificationsDisplay';
import { ProjectsPortfolio } from '@/components/sections/ProjectsPortfolio';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper title="Profile Summary" id="profile">
          <ProfileSummary />
        </SectionWrapper>

        {/* Custom structure for Work Experience to remove the outer panel */}
        <section id="experience" className="py-16 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-center text-primary">Work Experience</h2>
            <WorkExperience />
          </div>
        </section>

        {/* Custom structure for Education to remove the outer panel */}
        <section id="education" className="py-16 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-center text-primary">Education</h2>
            <Education />
          </div>
        </section>

        <SectionWrapper title="Technical Skills" id="skills">
          <SkillsShowcase />
        </SectionWrapper>

        <SectionWrapper title="Projects Portfolio" id="projects">
          <ProjectsPortfolio />
        </SectionWrapper>

        <SectionWrapper title="Licenses & Certifications" id="certifications">
          <CertificationsDisplay />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
