import React from 'react'
import { motion } from 'motion/react'

import SpeechBubble from '../components/SpeechBubble'
import NarrationBox from '../components/NarrationBox'

const Activity = () => {
  return (
    <section
      id="activity"
      className="manga-page px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* =================================================
            PAGE HEADER
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
              Page 005
            </p>

            <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-gray-400 md:block">
              BUILD LOG
            </span>
          </div>

          <h2 className="mt-3 text-5xl font-black md:text-7xl">
            ACTIVITY
          </h2>
        </motion.div>

        {/* =================================================
            OPENING SCENE
        ================================================= */}
        <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

          <NarrationBox>
            A builder is always in motion.
          </NarrationBox>

          <SpeechBubble triggerOnView
            side="right"
            className="md:rotate-[2deg]"
          >
            What happens between the projects?
          </SpeechBubble>

        </div>

        {/* =================================================
            MAIN ACTIVITY PANEL
        ================================================= */}
        <motion.article
          initial={{
            opacity: 0,
            y: 60,
            rotate: -1,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border-2 border-black bg-[#f4f1ea] p-6 md:p-10"
        >

          {/* =============================================
              PANEL HEADER
          ============================================= */}
          <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-6 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em]">
                BUILD LOG
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Code · Projects · Learning · Experiments
              </p>
            </div>

            <span className="text-5xl font-black">
              2026
            </span>

          </div>

          {/* =============================================
              VISUAL TIMELINE
          ============================================= */}
          <div className="relative mt-12">

            {/* Vertical line */}
            <div className="absolute bottom-0 left-[9px] top-0 w-[2px] bg-black md:left-[11px]" />

            <div className="space-y-10">

              {/* EVENT 01 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.45 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1 h-5 w-5 border-2 border-black bg-[#f4f1ea]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                  JUNE 2026
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  CSE GRADUATE
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  Completed the B.Tech CSE journey and moved fully
                  into building, learning, and preparing for the next
                  chapter.
                </p>
              </motion.div>

              {/* EVENT 02 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.45 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1 h-5 w-5 border-2 border-black bg-black" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                  2026
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  FULL STACK DEVELOPMENT
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  Building MERN applications with authentication,
                  APIs, databases, role-based access, and practical
                  product workflows.
                </p>
              </motion.div>

              {/* EVENT 03 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.45 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1 h-5 w-5 border-2 border-black bg-[#f4f1ea]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                  2026
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  AI ENGINEERING
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  Exploring LLM applications, tool calling,
                  multimodal systems, project intelligence,
                  and AI-assisted workflows.
                </p>
              </motion.div>

              {/* EVENT 04 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1 h-5 w-5 border-2 border-black bg-black" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                  NOW
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  BUILDING THE NEXT CHAPTER
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  Continuing to build full-stack products while
                  going deeper into AI engineering and intelligent
                  applications.
                </p>
              </motion.div>

            </div>
          </div>

          {/* =============================================
              BUILD PHILOSOPHY
          ============================================= */}
          <div className="mt-14 border-t-2 border-black pt-7">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-black uppercase tracking-[0.15em]">
                <span>CODE</span>
                <span>BUILD</span>
                <span>LEARN</span>
                <span>REPEAT</span>
              </div>

              <a
                href="https://github.com/Drona0113"
                target="_blank"
                rel="noreferrer"
                className="w-fit border-2 border-black px-4 py-2 text-xs font-black transition-all duration-200 hover:-translate-y-1  hover:text-white"
              >
                VIEW GITHUB ↗
              </a>

            </div>

          </div>

          {/* Background number */}
          <span className="pointer-events-none absolute -bottom-12 -right-2 text-[10rem] font-black leading-none text-black/[0.025]">
            05
          </span>

        </motion.article>

        {/* =================================================
            END DIALOGUE
        ================================================= */}
        <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">

          <SpeechBubble triggerOnView
            side="left"
            className="md:rotate-[-2deg]"
          >
            There's always another thing to learn.
          </SpeechBubble>

          <NarrationBox>
            Final page ahead.
          </NarrationBox>

        </div>

        {/* =================================================
            PAGE FOOTER
        ================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.45,
            duration: 0.5,
          }}
          className="mt-10 flex flex-col gap-3 border-t-2 border-black pt-4 text-xs font-black uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            SCENE 05 — PROGRESS
          </span>

          <span className="text-gray-400">
            NEXT → FINAL PAGE
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Activity