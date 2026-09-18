import React from 'react'
import { motion } from 'motion/react'

import SpeechBubble from '../components/SpeechBubble'
import NarrationBox from '../components/NarrationBox'

const About = () => {
  return (
    <section
      id="about"
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
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
              Page 002
            </p>

            <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-gray-400 md:block">
              CHARACTER DEVELOPMENT
            </span>
          </div>

          <h2 className="mt-3 text-5xl font-black md:text-7xl">
            THE STORY
          </h2>
        </motion.div>

        {/* =================================================
            NARRATION
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <NarrationBox>
            Every story starts somewhere.
          </NarrationBox>
        </motion.div>

        {/* =================================================
            PANEL 01 — THE BUILDER
        ================================================= */}
        <motion.article
          initial={{
            opacity: 0,
            x: -80,
            rotate: -1.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[330px] overflow-hidden border-2 border-black bg-[#f4f1ea] p-7 md:p-10"
        >

          {/* Panel metadata */}
          <div className="flex items-center justify-between border-b-2 border-black pb-4">
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              PANEL 01
            </span>

            <span className="text-xs font-black text-gray-400">
              THE BUILDER
            </span>
          </div>

          <div className="relative mt-10 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">

            {/* Text */}
            <div>
              <h3 className="text-4xl font-black md:text-6xl">
                THE BUILDER
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-700 md:text-lg">
                I build full-stack applications with a focus on
                clean interfaces, practical backend systems, and
                solving real-world problems through software.
              </p>
            </div>

            {/* Dialogue */}
            <div className="flex justify-end md:pr-8">
              <SpeechBubble triggerOnView>
                I started by building things.
              </SpeechBubble>
            </div>
          </div>

          {/* Ink detail */}
          <div className="absolute -bottom-12 -right-8 text-[9rem] font-black leading-none text-black/[0.035]">
            01
          </div>
        </motion.article>

        {/* Gutter */}
        <div className="h-14" />

        {/* =================================================
            PANELS 02 + 03
        ================================================= */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* =================================================
              PANEL 02 — THE EXPLORER
          ================================================= */}
          <motion.article
            initial={{
              opacity: 0,
              x: -70,
              rotate: -1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[390px] overflow-hidden border-2 border-black bg-black p-7 text-white md:p-9"
          >

            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                PANEL 02
              </span>

              <span className="text-xs font-black text-gray-500">
                THE EXPLORER
              </span>
            </div>

            <div className="relative z-10 mt-10">
              <h3 className="text-4xl font-black md:text-5xl">
                THE EXPLORER
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-300">
                My work expanded into AI, LLM-powered
                applications, multimodal systems, and
                intelligent workflows.
              </p>

              <div className="mt-10">
                <SpeechBubble triggerOnView
                  side="right"
                  className="text-black"
                >
                  Then I discovered AI.
                </SpeechBubble>
              </div>
            </div>

            {/* Background circles */}
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full border border-white/20" />

            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-white/20" />
          </motion.article>

          {/* =================================================
              PANEL 03 — THE CREATOR
          ================================================= */}
          <motion.article
            initial={{
              opacity: 0,
              x: 70,
              rotate: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[390px] overflow-hidden border-2 border-black p-7 md:p-9"
          >

            <div className="flex items-center justify-between border-b-2 border-black pb-4">
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                PANEL 03
              </span>

              <span className="text-xs font-black text-gray-400">
                THE CREATOR
              </span>
            </div>

            <div className="mt-10">
              <h3 className="text-4xl font-black md:text-5xl">
                THE CREATOR
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-700">
                As a manga artist, I naturally think in panels,
                stories, characters, and visual experiences —
                and I bring that creative mindset into software.
              </p>

              <div className="mt-10 flex justify-end md:pr-6">
                <SpeechBubble triggerOnView>
                  And eventually... code met manga.
                </SpeechBubble>
              </div>
            </div>

            {/* Manga-style ink mark */}
            <div className="absolute bottom-8 left-8 h-2 w-28 -skew-x-12 bg-black" />
          </motion.article>
        </div>

        {/* =================================================
            END OF PAGE
        ================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.45,
            duration: 0.5,
          }}
          className="mt-12 flex flex-col gap-4 border-t-2 border-black pt-5 text-xs font-black uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            SCENE 02 — CHARACTER
          </span>

          <span className="text-gray-400">
            NEXT → ABILITIES
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default About