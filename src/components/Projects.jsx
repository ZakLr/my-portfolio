import Image from "next/image";
import { useState, useEffect } from "react";
import DotsEffect from "./DotsEffect";
import sentimentImage from "../assets/sentiment.png";
import kitabyImage from "../assets/kitaby.png";
import gdgWebsiteImage from "../assets/gdg-website.png";
import devblogImage from "../assets/devblog.png";
import gdscWebsiteImage from "../assets/gdsc-website.png";
import crevixImage from "../assets/crevix.png";
const projectsData = [
  {
    title: "Sentiment Classifier",
    desc: "A personal made Natural Language Processing model that classifies the sentiment of a given text into anger, fear or joy with a web interface to test it.",
    image: sentimentImage,
    urlLink: "",
    githubLink: "https://github.com/ZakLr/Sentiment-Analyser-2-",
    technologies: ["NLP", "Machine Learning", "Python", "Gradio"],
  },
  {
    title: "Kitaby",
    desc: "A colaborative mobile application we made as an academic project for book lovers, allows for exchanging books, reserving them, and critisize them with other people.",
    image: kitabyImage,
    urlLink: "",
    githubLink: "https://github.com/Kitaby/Kitaby-Package",
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    title: "GDG-SBA website",
    desc: "A colaborative project i contributed in to build the official website of Google Developer's Groups in Sidi Bel Abbes",
    image: gdgWebsiteImage,
    urlLink: "https://www.gdg-sba.club/",
    githubLink: "",
    technologies: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    title: "DevBlog",
    desc: "A self-made end-to-end Fullstack blog application for developers to share their experiences and knowledge with others and write about any topic in Computer Science ",
    image: devblogImage,
    urlLink: "",
    githubLink: "https://github.com/ZakLr/Styles-generator",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS", "Express.js"],
  },
  {
    title: "GDSC ESI SBA Website",
    desc: "A colaborative project to build the official website of Google Developer's Student Clubs in Sidi Bel Abbes",
    image: gdscWebsiteImage,
    urlLink: "https://www.gdsc-esi-sba.club/",
    githubLink: "",
    technologies: ["Next.js", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Crevix",
    desc: "It's a colaborative fullstack platform we made for making knowledge sharing between a company's employees easier",
    image: crevixImage,
    urlLink: "",
    githubLink: "https://github.com/4nskarts/hackathon-infinity",
    technologies: ["Next.js", "TailwindCSS", "JavaScript"],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to ensure the cards are rendered before applying the class
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div id="projects" className="bg-background-primary h-auto pb-10 relative z-10 overflow-hidden">
      <div className="text-5xl font-bold italic text-text-primary text-center p-5 pb-16">
        Some of My Projects
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          {projectsData.map((project, index) => (
            <div
              className="bg-background-secondary rounded-xl z-10 max-w-[80vw]"
              key={index}
            >
              {/* Project Card content */}
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-t-xl object-cover h-80"
                  

                />
              </div>
              <div className="text-primary text-center p-4">
                <h6 className="text-xl font-bold mb-2 text-text-third">
                  {project.title}
                </h6>
                <p className="text-lg text-text-third">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-text-secondary text-text-primary font-bold py-1 px-2 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={project.urlLink || project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight inline-block mt-4 bg-button hover:bg-button-hover text-primary font-bold py-2 px-4 rounded-full text-text-primary"
                >
                  {project.urlLink ? "Visit Site" : "View on GitHub"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DotsEffect bottom={3} left={0} rows={8} columns={8} opacity={0.3}/>
    </div>
  );
};

export default Projects;