import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cog, Brain, Leaf } from "lucide-react";

const projects = [
  {
    title: "Debt Allocation Process Automation",
    description:
      "Automated the complex debt allocation workflow for the insurance sector, significantly reducing manual processing time and improving accuracy in financial operations.",
    icon: Cog,
    tools: ["Python", "Flask", "PostgreSQL"],
    impact: "Reduced processing time by 70% and eliminated manual errors",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "SmartPolicy – AI Health Insurance Platform",
    description:
      "Final Year Project: An AI-driven platform that provides personalized health insurance recommendations based on user profiles, medical history, and risk assessment.",
    icon: Brain,
    tools: ["Python", "FastAPI", "ReactJS", "Machine Learning", "PostgreSQL"],
    impact: "Personalized insurance matching with 85% accuracy",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AgriGrowth Solutions Limited",
    description:
      "Developed a responsive web platform connecting farmers with markets, resources, and expert agricultural advice to enhance productivity and profitability.",
    icon: Leaf,
    tools: ["Javascript", "PostgreSQL","PHP", "HTML", "CSS"],
    impact: "Empowering farmers with digital tools for growth",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl border border-border overflow-hidden card-elevated">
                
                <div className={`h-32 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                  <project.icon className="w-12 h-12 text-foreground/60 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-xs font-medium text-primary">
                      ✨ {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
