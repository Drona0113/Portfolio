import React, { useState } from 'react'
import { motion } from 'motion/react'

import SpeechBubble from '../components/SpeechBubble'
import NarrationBox from '../components/NarrationBox'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // FormSubmit URL - sends directly to your email
    const formUrl = 'https://formsubmit.co/drona0442@gmail.com'

    try {
      await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section
      id="contact"
      className="manga-page px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* =================================================
            FINAL MANGA PAGE
        ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border-2 border-black bg-black text-white"
        >

          {/* =============================================
              PAGE METADATA
          ============================================= */}
          <div className="flex items-center justify-between border-b border-white/20 px-6 py-4 text-xs font-black uppercase tracking-[0.25em] md:px-10">
            <span>FINAL PAGE</span>

            <span className="text-gray-600">
              PAGE 006
            </span>
          </div>

          {/* =============================================
              VISUAL BACKGROUND
          ============================================= */}
          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[40px] border-white/[0.035]" />

            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border-[50px] border-white/[0.035]" />

            <div className="absolute right-[18%] top-[25%] h-px w-64 rotate-[-12deg] bg-white/10" />

            <div className="absolute right-[12%] top-[35%] h-px w-40 rotate-[-12deg] bg-white/10" />

          </div>

          {/* =============================================
              CONTENT
          ============================================= */}
          <div className="relative z-10 p-7 md:p-12 lg:p-16">

            {/* Narration */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] text-indigo-400">
                Final Scene
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="mt-6 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-[8rem]"
            >
              LET'S BUILD
              <br />
              SOMETHING.
            </motion.h2>

            {/* Dialogue */}
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="max-w-2xl text-lg leading-8 text-gray-300"
              >
                I'm looking for opportunities to work on
                full-stack applications and AI-powered products.
              </motion.p>

              <SpeechBubble triggerOnView
                side="right"
                className="shrink-0 text-black md:rotate-[2deg]"
              >
                So... what's the next chapter?
              </SpeechBubble>

            </div>

            {/* =========================================
                CONTACT FORM
            ========================================= */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 border-2 border-white/20 bg-white/10 p-8 text-center"
              >
                <p className="text-2xl font-black">Message Sent!</p>
                <p className="mt-2 text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 border-2 border-white px-6 py-2 text-sm font-bold hover:bg-white hover:text-black"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.6 }}
                onSubmit={handleSubmit}
                className="mt-12 space-y-4"
              >
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-2 border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white px-8 py-3 text-sm font-black text-white transition-all hover:-translate-y-1 hover:bg-indigo-400 hover:border-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </motion.button>
              </motion.form>
            )}

            {/* =========================================
                SOCIAL LINKS
            ========================================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/Drona0113"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-white px-6 py-3 text-sm font-black text-white transition-all duration-200 hover:-translate-y-1 hover:bg-indigo-400 hover:border-indigo-400 "
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/in/kaja-drona-venkata-sai-gopinadh-443986269/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-white px-6 py-3 text-sm font-black text-white transition-all duration-200 hover:-translate-y-1  hover:bg-indigo-400 hover:border-indigo-40"
              >
                LINKEDIN ↗
              </a>

              <a
                href="https://leetcode.com/n0XLSDg1SO/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-white px-6 py-3 text-sm font-black text-white transition-all duration-200 hover:-translate-y-1 hover:bg-indigo-400 hover:border-indigo-40"
              >
                LEETCODE ↗
              </a>
            </motion.div>

            {/* =========================================
                END NARRATION
            ========================================= */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.95,
                duration: 0.6,
              }}
              className="mt-16 border-t border-white/20 pt-6"
            >

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <NarrationBox>
                  To be continued...
                </NarrationBox>

                <span className="text-xs font-black uppercase tracking-[0.25em] text-gray-600">
                  DRONA — 2026
                </span>

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* =============================================
            CHAPTER END
        ============================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mt-8 flex flex-col gap-3 border-t-2 border-black pt-4 text-xs font-black uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            END OF CHAPTER
          </span>

          <a
            href="#home"
            className="transition-colors hover:text-indigo-600"
          >
            READ AGAIN ↑
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact