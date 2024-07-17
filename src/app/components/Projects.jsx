import Image from "next/image";
import { useState, useEffect } from "react";
import DotsEffect from "./DotsEffect";

const projectsData = [
  {
    title: "Sentiment Classifier",
    desc: "A NLP model created to detect fear, anger, joy in texts",
    image:"",
    urlLink: "",
    githubLink: "https://github.com/ZakLr/Sentiment-Analyser-2-",
    technologies: ["NLP", "Machine Learning", "Python", "Gradio"],
  },
  {
    title: "Kitaby",
    desc: "A colaborative mobile application for book lovers, allows for exchanging books, reserving them, and critisize them with other people",
    image: "",
    urlLink: "https://meryoul-text-transform.vercel.app",
    githubLink: "https://github.com/ZakLr/Meryoul-Text-Generator",
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    title: "GDG-SBA website",
    desc: "The official website of GDG-SBA club",
    image:"",
    urlLink: "https://www.gdg-sba.club/",
    githubLink: "",
    technologies: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    title: "DevBlog",
    desc: "A blog for developers to share their experiences and knowledge with others and write about any topic in Computer Science ",
    image:"",
    urlLink: "",
    githubLink: "https://github.com/ZakLr/Styles-generator",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "GDSC ESI SBA Website",
    desc: "The official website of the scientific club GDSC ESI SBA",
    image:"",
    urlLink: "https://www.gdsc-esi-sba.club/",
    githubLink: "",
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
    <div className="bg-background-primary h-auto pb-10 relative z-10 overflow-hidden">
      <div className="text-5xl font-bold italic text-text-primary text-center p-5 pb-7">
        Some of My Projects
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {projectsData.map((project, index) => (
            <div
              className="bg-background-secondary rounded-xl z-10"
              key={index}
            >
              {/* Project Card content */}
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-t-xl object-cover h-auto"
                  layout="responsive"
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
                      className="bg-highlight text-text-third font-bold py-1 px-2 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={project.urlLink || project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight inline-block mt-4 bg-button hover:bg-button-hover text-primary font-bold py-2 px-4 rounded-full"
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