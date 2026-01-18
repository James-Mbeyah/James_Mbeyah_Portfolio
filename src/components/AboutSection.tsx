import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Building intelligent systems that streamline operations",
  },
  {
    icon: Target,
    title: "Problem-Solving",
    description: "Tackling complex challenges with innovative solutions",
  },
  {
    icon: Lightbulb,
    title: "Adaptability",
    description: "Quick to learn and apply emerging technologies",
  },
  {
    icon: TrendingUp,
    title: "Impact-Driven",
    description: "Focused on measurable business outcomes",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a motivated and detail-oriented Software Developer with a strong 
              passion for <span className="text-foreground font-medium">automation</span>, 
              <span className="text-foreground font-medium"> AI</span>, and 
              <span className="text-foreground font-medium"> data-driven solutions</span>. 
              My expertise lies in developing intelligent systems that optimize operations 
              and drive efficiency across enterprise environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With hands-on experience in process automation, data analytics, and 
              full-stack development, I bring a unique blend of technical skills and 
              business acumen to every project. I thrive on transforming complex 
              challenges into elegant, scalable solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines <span className="text-foreground font-medium">analytical thinking</span> with 
              <span className="text-foreground font-medium"> creative problem-solving</span>, 
              always keeping the end-user experience and business impact at the forefront.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
