import React from 'react'
import { motion } from 'motion/react'

import SpeechBubble from '../components/SpeechBubble'
import NarrationBox from '../components/NarrationBox'

const skillGroups = [
  {
    title: 'FRONTEND',
    number: '01',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Redux Toolkit',
    ],
  },
  {
    title: 'BACKEND',
    number: '02',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MongoDB',
      'JWT',
      'MVC',
    ],
  },
  {
    title: 'AI / DATA',
    number: '03',
    skills: [
      'Python',
      'LLM APIs',
      'Tool Calling',
      'Multimodal AI',
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],
  },
  {
    title: 'ENGINEERING',
    number: '04',
    skills: [
      'Java',
      'SQL',
      'Git',
      'GitHub',
      'Postman',
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
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
              Page 003
            </p>

            <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-gray-400 md:block">
              ABILITY ARCHIVE
            </span>
          </div>

          <h2 className="mt-3 text-5xl font-black md:text-7xl">
            ABILITIES
          </h2>
        </motion.div>

        {/* =================================================
            OPENING NARRATION
        ================================================= */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <NarrationBox>
            Every builder needs a toolkit.
          </NarrationBox>

          <SpeechBubble triggerOnView
            side="right"
            className="md:rotate-[2deg]"
          >
            Okay... what can you actually build?
          </SpeechBubble>

        </div>

        {/* =================================================
            SKILL PANELS
        ================================================= */}
        <div className="grid gap-5 md:grid-cols-12">

          {skillGroups.map((group, index) => {

            const fromLeft = index % 2 === 0

            const width =
              index === 0
                ? 'md:col-span-7'
                : index === 1
                ? 'md:col-span-5'
                : index === 2
                ? 'md:col-span-5'
                : 'md:col-span-7'

            return (
              <motion.article
                key={group.title}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -80 : 80,
                  rotate: fromLeft ? -1 : 1,
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
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  boxShadow: '8px 8px 0 #111',
                }}
                className={`relative overflow-hidden border-2 border-black p-6 md:p-8 ${width}`}
              >

                {/* Panel number */}
                <span className="absolute right-5 top-5 text-xs font-black text-gray-400">
                  {group.number}
                </span>

                {/* Ink stroke */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '45%' }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="absolute left-0 top-0 h-1 bg-black"
                />

                {/* Panel label */}
                <p className="mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                  PANEL {group.number}
                </p>

                {/* Heading */}
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-black md:text-3xl">
                    {group.title}
                  </h3>

                  <span className="h-px flex-1 bg-black/20" />
                </div>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          0.35 +
                          index * 0.1 +
                          skillIndex * 0.045,
                        duration: 0.3,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="border border-black px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-black hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Large background number */}
                <span className="pointer-events-none absolute -bottom-8 -right-2 text-8xl font-black leading-none text-black/[0.035]">
                  {group.number}
                </span>

              </motion.article>
            )
          })}
        </div>

        {/* =================================================
            FINAL DIALOGUE
        ================================================= */}
        <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">

          <SpeechBubble triggerOnView
            side="left"
            className="md:rotate-[-1deg]"
          >
            And we're still learning.
          </SpeechBubble>

          <NarrationBox>
            The journey continues...
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
            SCENE 03 — ABILITIES
          </span>

          <span className="text-gray-400">
            NEXT → THE WORK
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills