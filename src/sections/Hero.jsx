import React from 'react'
import { motion } from 'motion/react'

import SpeechBubble from '../components/SpeechBubble'
import NarrationBox from '../components/NarrationBox'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            MANGA COVER / PAGE 001
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative border-2 border-black bg-[#f4f1ea]"
        >

          {/* Top metadata */}
          <div className="flex items-center justify-between border-b-2 border-black px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] md:px-8">
            <span>PORTFOLIO</span>
            <span>PAGE 001</span>
          </div>

          {/* =================================================
              MAIN MANGA COMPOSITION
          ================================================= */}
          <div className="grid min-h-[620px] md:grid-cols-[1.4fr_0.6fr]">

            {/* =================================================
                MAIN CHARACTER / INTRODUCTION
            ================================================= */}
            <div className="relative flex flex-col justify-center overflow-hidden border-b-2 border-black p-8 md:border-b-0 md:border-r-2 md:p-12 lg:p-16">

              {/* Decorative ink circles */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[3px] border-black"
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.7,
                }}
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-black"
              />

              <div className="relative z-10">

                {/* Character label */}
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                  }}
                  className="mb-5 text-sm font-bold uppercase tracking-[0.3em]"
                >
                  Developer × Creator
                </motion.p>

                {/* Name */}
                <motion.h1
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.7,
                  }}
                  className="text-[4.5rem] font-black leading-[0.85] tracking-[-0.07em] md:text-8xl lg:text-[9rem]"
                >
                  DRONA
                </motion.h1>

                {/* Ink stroke */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  transition={{
                    delay: 0.9,
                    duration: 0.6,
                  }}
                  className="my-8 h-3 bg-black"
                />

                {/* Role */}
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.6,
                  }}
                  className="max-w-2xl text-2xl font-black leading-tight md:text-4xl"
                >
                  Full Stack Developer
                  <br />
                  <span className="font-normal">
                    × AI Engineering
                  </span>
                </motion.h2>

                {/* Graduation */}
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                  CSE Graduate · June 2026
                </p>

                {/* Introduction */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.25,
                    duration: 0.6,
                  }}
                  className="mt-6 max-w-xl text-base leading-7 text-gray-700 md:text-lg"
                >
                  I build full-stack applications and AI-powered
                  systems where engineering meets creativity.
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 0.6,
                  }}
                  className="mt-9 flex flex-wrap gap-4"
                >
                  <a
                    href="#projects"
                    className="border-2 border-black  px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-1"
                  >
                    EXPLORE MY WORK
                  </a>

                  <a
                    href="https://github.com/Drona0113"
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-black bg-[#f4f1ea] px-6 py-3 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:!text-white"
                  >
                    GITHUB ↗
                  </a>
                </motion.div>

                {/* Opening narration */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.8,
                    duration: 0.5,
                  }}
                  className="mt-8 flex items-center gap-4"
                >
                  <NarrationBox>
                    The story begins.
                  </NarrationBox>

                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                    ↓
                  </span>
                </motion.div>

              </div>
            </div>

            {/* =================================================
                MANGA CHARACTER PANEL
            ================================================= */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden p-6 md:min-h-0 md:p-8">

              {/* Screentone */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #111 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />

              {/* Speech bubble */}
              <SpeechBubble
                side="left"
                className="absolute left-4 top-7 md:left-8 md:top-10"
              >
                So... what are we building today?
              </SpeechBubble>

              {/* Abstract manga character */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -3,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  type: 'spring',
                }}
                className="absolute bottom-6 right-8 h-56 w-40 rotate-[-6deg] bg-black md:h-72 md:w-52"
              >

                {/* Head / face */}
                <div className="absolute left-5 top-8 h-24 w-24 rounded-full border-4 border-white md:left-8 md:top-10 md:h-32 md:w-32" />

                {/* Ink detail */}
                <div className="absolute bottom-8 left-4 right-4 h-3 bg-white md:left-8 md:right-8" />

              </motion.div>

              {/* Small panel number */}
              <span className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 md:bottom-7 md:left-8">
                PANEL 01
              </span>

            </div>
          </div>

          {/* =================================================
              BOTTOM PAGE STRIP
          ================================================= */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-black px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] md:px-8 md:text-xs">
            <span>WEB × AI × STORYTELLING</span>
            <span>SCENE 01 — BEGIN</span>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero