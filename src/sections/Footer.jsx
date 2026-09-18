import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className="border-t-2 border-black px-6 py-10 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          {/* Brand */}
          <div>
            <p className="text-lg font-black tracking-widest">
              DRONA.
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Full Stack Developer × AI Engineering
            </p>
          </div>

          {/* Chapter ending */}
          <div className="text-left md:text-right">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              END OF CHAPTER
            </p>

            <p className="mt-2 text-xs text-gray-500">
              More stories are being built.
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-2 border-t border-black/20 pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 Drona
          </span>

          <span>
            Built with React · Motion · Tailwind CSS
          </span>
        </div>

      </motion.div>
    </footer>
  )
}

export default Footer