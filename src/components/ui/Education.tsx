"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="relative z-20 py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12"
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between p-8 glass-card rounded-2xl"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">
              CMR College of Engineering & Technology
            </h3>
            <p className="text-white/70">
              B.Tech in Artificial Intelligence & Machine Learning
            </p>
            <p className="text-white/50 text-sm mt-1">
              2022 – April 2026 | CGPA: 8.2 | Hyderabad, Telangana
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-center justify-between p-8 glass-card rounded-2xl"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">
              NxtWave Disruptive Technologies
            </h3>
            <p className="text-white/70">
              MERN Stack Development, Data Structures & Machine Learning
            </p>
            <p className="text-white/50 text-sm mt-1">
              2022 – April 2026 | Hyderabad, Telangana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
