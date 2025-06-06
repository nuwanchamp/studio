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

        <SectionWrapper title="Work Experience" id="experience">
          <WorkExperience />
        </SectionWrapper>

        <SectionWrapper title="Education" id="education">
          <Education />
        </SectionWrapper>

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
