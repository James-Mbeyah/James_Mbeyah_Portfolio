import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, BarChart3, Globe, MessageSquare, Users, Lightbulb, RefreshCw } from "lucide-react";

const technicalSkills = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Flask", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "ReactJS", category: "Frameworks" },
  { name: "NodeJS", category: "Frameworks" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Power BI", category: "Analytics" },
  { name: "Excel", category: "Analytics" },
  { name: "Networking", category: "Infrastructure" },
  { name: "Web Development", category: "Development" },
  { name: "Data Annotation", category: "AI/ML" },
];

const softSkills = [
  { name: "Collaboration", icon: Users, description: "Effective team player" },
  { name: "Communication", icon: MessageSquare, description: "Clear and concise" },
  { name: "Problem-Solving", icon: Lightbulb, description: "Analytical approach" },
  { name: "Adaptability", icon: RefreshCw, description: "Quick learner" },
];

const skillCategories = [
  { name: "Languages", icon: Code2, color: "text-blue-500" },
  { name: "Frameworks", icon: Globe, color: "text-green-500" },
  { name: "Databases", icon: Database, color: "text-purple-500" },
  { name: "Analytics", icon: BarChart3, color: "text-orange-500" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Technical Skills
          </h3>
          
          {/* Category Icons */}
          <div className="flex justify-center gap-8 mb-8">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-muted-foreground">{cat.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.03 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary/30 transition-colors group"
              >
                <skill.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
