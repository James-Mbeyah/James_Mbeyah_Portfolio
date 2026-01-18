import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-section-alt">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 p-8 bg-card rounded-2xl border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-foreground">
                  Download My Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get a detailed overview of my experience and skills
                </p>
              </div>
            </div>
            <a
              href="/James_Mbeyah_Resume.pdf"
              download="James_Mbeyah_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 ml-4"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
