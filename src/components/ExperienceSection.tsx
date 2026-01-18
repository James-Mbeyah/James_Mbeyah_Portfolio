import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Kenya Reinsurance Corporation",
    role: "Software Developer Intern – Automation, AI & Data Analysis",
    period: "June 2025 - August 2025",
    responsibilities: [
      "Developed automation solutions to streamline internal workflows and reduce manual processing time",
      "Implemented AI-driven data analysis tools for risk assessment and underwriting optimization",
      "Built dashboards and reporting systems using Power BI for executive decision-making",
      "Collaborated with cross-functional teams to identify automation opportunities",
      "Created Python scripts for data extraction, transformation, and loading (ETL) processes",
    ],
  },
  {
    company: "Homabay County Government",
    role: "IT Intern",
    period: "July 2023 - September 2023",
    responsibilities: [
      "Provided technical support and maintenance for government IT infrastructure",
      "Assisted in network administration and troubleshooting connectivity issues",
      "Supported digitization initiatives for improved service delivery",
      "Documented IT processes and created user guides for staff training",
      "Participated in the deployment of new software systems across departments",
    ],
  },
  {
    company: "University of Nairobi",
    role: "Power BI Data Analyst Intern",
    period: "March 2023 - May 2023",
    responsibilities: [
      "Designed and developed interactive Power BI dashboards for academic performance tracking",
      "Performed data cleaning, modeling, and visualization for institutional reports",
      "Created automated data refresh workflows for real-time analytics",
      "Collaborated with stakeholders to understand reporting requirements",
      "Trained staff members on Power BI usage and best practices",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative pl-8 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:-right-2"
                    : "left-0 md:-left-2"
                } md:transform md:translate-x-0`}
              />

              <div className="bg-card rounded-xl p-6 border border-border card-elevated">
                <div
                  className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold">{exp.company}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {exp.role}
                </h3>
                <div
                  className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                      style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}
                    >
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${
                          index % 2 === 0 ? "md:order-last md:ml-2" : "mr-0"
                        }`}
                      />
                      <span className={index % 2 === 0 ? "md:mr-2" : ""}>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
