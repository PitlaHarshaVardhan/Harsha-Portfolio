"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <div className="flex flex-col items-center text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">About Me</h2>
          <div className="h-1 w-24 bg-blue-500 mb-8 mx-auto" />

          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Results-driven Full Stack Developer (MERN) and AI/ML Enthusiast
              with strong foundations in React.js, Node.js, JavaScript (ES6+),
              and Python. Passionate about designing responsive, scalable, and
              data-driven web applications.
            </p>

            <p>
              Skilled in RESTful API integration, modern UI/UX design, and cloud
              deployment. Seeking a challenging role where I can contribute to
              end-to-end product development, enhance user experiences, and grow
              as a versatile software engineer.
            </p>

            <p>
              Currently working as a Full Stack Developer at Deepklarity. Based
              in Hyderabad, Telangana, India — open to relocation and available
              for immediate joining.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
