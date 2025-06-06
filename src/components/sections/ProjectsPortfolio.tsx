import { ProjectCard } from '@/components/shared/ProjectCard';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#", // Replace with actual link
    repoLink: "#", // Replace with actual link
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with boards, lists, and cards, inspired by Trello.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task board",
    tags: ["Vue.js", "Firebase", "Realtime DB"],
    liveLink: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, built with D3.js and React.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "charts graphs",
    tags: ["React", "D3.js", "Python", "Flask"],
    repoLink: "#",
  },
   {
    title: "AI Powered Chatbot",
    description: "A customer service chatbot utilizing natural language processing to understand and respond to user queries.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "chat interface",
    tags: ["Python", "NLP", "Dialogflow", "API"],
    liveLink: "#",
  },
];

export function ProjectsPortfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to 2 columns for larger cards */}
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
