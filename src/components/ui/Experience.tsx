"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Deepklarity",
    period: "Dec 2025 – Present",
    desc: "Building and maintaining scalable web applications across frontend and backend. Developing features using modern JavaScript frameworks, backend APIs, and databases with a focus on performance and security. Collaborating with a highly supportive and skilled team in a positive, fast-paced working environment. Gaining hands-on experience with clean code practices, system design, and real-world production workflows. Participating in team discussions, code reviews, and collaborative problem-solving.",
  },
  {
    role: "Full Stack & AI Developer",
    company: "Thinkvate – Product: Diligence",
    period: "Sep 2025 – Dec 2025",
    desc: "Developed dynamic and responsive web interfaces using React.js, JavaScript, and CSS3, improving user experience and performance. Integrated RESTful APIs using Axios and implemented JWT-based authentication with secure role-based access control. Contributed to backend API design and worked with MongoDB and PostgreSQL for efficient data handling. Deployed full-stack applications on AWS and collaborated using Git within an Agile development environment. Worked closely with cross-functional teams to deliver scalable and reliable product features.",
  },
];

export default function Experience() {
  return (
    <section className="relative z-20 py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="pl-8 md:pl-16 relative"
          >
            {/* Dot */}
            <div className="absolute top-2 left-[-5px] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

            <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
              <span className="text-sm text-blue-400 font-mono tracking-wider">
                {exp.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-1">
                {exp.role}
              </h3>
              <h4 className="text-xl text-white/60 mb-6">{exp.company}</h4>
              <p className="text-white/70 leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
