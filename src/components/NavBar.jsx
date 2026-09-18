import React from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 w-full px-3 py-4 md:px-12 md:py-5"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between overflow-hidden border-2 border-black bg-[#f4f1ea]/95 px-3 py-3 shadow-[4px_4px_0_#111] backdrop-blur-sm md:px-5">

        <a
          href="#home"
          className="text-lg font-black tracking-widest"
        >
          DRONA.
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-indigo-600"
          >
            ABOUT
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-indigo-600"
          >
            SKILLS
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-indigo-600"
          >
            WORK
          </a>

          <a
            href="#activity"
            className="transition-colors hover:text-indigo-600"
          >
            ACTIVITY
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-indigo-600"
          >
            CONTACT
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Drona0113"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-black  px-4 py-2 text-xs font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#f4f1ea] hover:text-black"
          >
            GITHUB ↗
          </a>

          <a
            href="/Drona_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-black  px-4 py-2 text-xs font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#f4f1ea] hover:text-black"
          >
            RESUME ↗
          </a>
        </div>

      </nav>
    </motion.header>
  )
}

export default Navbar