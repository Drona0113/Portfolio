import React from "react";
import { motion } from "motion/react";

import SpeechBubble from "../components/SpeechBubble";
import NarrationBox from "../components/NarrationBox";

const projects = [
  {
    title: "AGRIMART",
    type: "FULL STACK",
    label: "REAL-WORLD PRODUCT",
    description:
      "Architected a bidirectional marketplace allowing farmers and suppliers to trade directly, eliminating middleman costs.",
    challenge:
      "The challenge was designing a reliable marketplace that could support different user roles, secure transactions, multilingual access, and administrative control while keeping the experience simple for farmers and suppliers.",
    highlights: [
      "Developed a secure Role-Based Access Control (RBAC) system with 4 distinct user roles and personalized dashboards.",
      "Integrated 6-language support via React Context and the Dummy Razorpay Payment Gateway for secure digital transactions.",
      "Implemented a Security Audit Log that tracks administrative actions and IP addresses to ensure platform accountability.",
    ],
    why_this:
      "Gives farmers and suppliers a direct digital marketplace, reducing dependence on intermediaries while providing secure, accessible tools for managing commerce.",
    tech: ["MERN", "Razorpay", "JWT", "i18n"],
    github: "https://github.com/Drona0113/AgriMart",
    live: "https://agri-mart-orcin.vercel.app",
  },

  {
    title: "GRAMACHARITRA",
    type: "FULL STACK",
    label: "DIGITAL ARCHIVE",
    description:
      "Developed a full-stack digital archive for rural communities to preserve and explore verified village histories.",
    challenge:
      "The challenge was building a trustworthy digital archive where public users could explore village history while authorized administrators could securely manage and update records without exposing sensitive management functionality.",
    highlights: [
      "Implemented an interactive commenting system to drive community engagement and gather feedback on records.",
      "Engineered a secure Admin Panel using JWT and bcrypt, enabling authorized users to manage data while maintaining a read-only public experience.",
      "Architected the backend using the MVC pattern and RESTful APIs to ensure clean code separation and scalability.",
    ],
    why_this:
      "Preserves local village history in a structured digital format, making community knowledge easier to access while giving authorized users control over maintaining the archive.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Drona0113/Gramacharitra-dyamic",
  },

  {
    title: "CRIME PREDICTION",
    type: "AI / DATA",
    label: "MACHINE LEARNING",
    description:
      "Developed an interactive web app utilizing Support Vector Regression (SVR) to forecast crime trends with high accuracy.",
    challenge:
      "The challenge was transforming raw, multi-year crime data into a usable prediction system. The project required data preprocessing, feature preparation, regression modeling, and geographic visualization to turn historical patterns into understandable insights.",
    highlights: [
      "Trained the model on multi-year historical datasets to assist law enforcement in proactive resource planning.",
      "Visualized Indian states crime patterns through Geospatial Heatmaps to identify and monitor high-risk areas.",
      "Built a Python-based data pipeline to clean and normalize raw datasets for improved machine learning performance.",
    ],
    why_this:
      "Turns historical crime data into visual and predictive insights that make complex patterns easier to explore and understand.",
    tech: ["Python", "Streamlit", "SVR", "Scikit-learn"],
    github: "https://github.com/Drona0113/Crime-Count-Prediction-using-SVR",
    live: "https://drona0113-crime-count-prediction-using--appvisualization-e09yma.streamlit.app/",
  },

  {
    title: "MANGACRAFT",
    type: "AI / ENGINEERING",
    label: "AI APPLICATION",
    description:
      "An AI-powered manga panel assistant combining LLMs, multimodal analysis, project intelligence, and image generation.",
    challenge:
      "The core challenge was turning a simple chatbot into a context-aware AI application. MangaCraft connects LLM reasoning, persistent project state, multimodal inputs, tool execution, and image generation into a single workflow.",

    highlights: [
      "Built an agentic LLM workflow using tool calling to route requests across project memory, panel analysis, composition analysis, and generation tools.",
      "Implemented multimodal panel analysis to extract visual context from uploaded manga panels for downstream AI workflows.",
      "Designed persistent Project Intelligence with SQLite-backed project memory, conversation history, and project context retrieval.",
      "Built an AI-assisted reference generation pipeline combining LLM-generated prompts with image generation models.",
      "Implemented project and conversation management so multiple conversations can exist independently within the same project.",
      "Added context-aware prompting, validation, and tool-routing logic to keep AI responses grounded in the active project.",
    ],
    why_this:
      "Helps manga creators move from a basic AI conversation to a persistent creative workspace where project context, visual references, and AI workflows stay connected.",
    tech: ["Python", "LLM APIs", "OpenRouter", "SQLite"],
    github: "https://github.com/Drona0113/Manga-Craft",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="manga-page w-full overflow-x-hidden px-4 py-20 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* PAGE HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
              Page 004
            </p>

            <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-gray-400 md:block">
              THE WORK
            </span>
          </div>

          <h2 className="mt-3 text-5xl font-black md:text-7xl">
            SELECTED WORK
          </h2>
        </motion.div>

        {/* OPENING SCENE */}
        <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <NarrationBox>
            Ideas are easy. Building them is the story.
          </NarrationBox>

          <SpeechBubble triggerOnView side="right" className="md:rotate-[2deg]">
            Show me what you've built.
          </SpeechBubble>
        </div>

        {/* PROJECT PANELS */}
        <div className=" w-full space-y-14">
          {projects.map((project, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full overflow-visible border-2 border-black bg-[#f4f1ea]"
              >
                {/* CASE FILE HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black px-5 py-3 md:px-7">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                    CASE FILE
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">
                      {project.type}
                    </span>

                    <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-gray-400 sm:block">
                      {project.label}
                    </span>
                  </div>
                </div>

                {/* PROJECT HERO */}
                <div className="grid md:grid-cols-[0.28fr_0.72fr]">
                  {/* LEFT PROJECT CATEGORY */}
                  <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b-2 border-black bg-[#e9e5dc] md:min-h-[390px] md:border-b-0 md:border-r-2">
                    {/* HALFTONE */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #111 1px, transparent 1px)",
                        backgroundSize: "8px 8px",
                      }}
                    />

                    {/* OUTER MANGA RING */}
                    <motion.div
                      initial={{
                        scale: 0.5,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="absolute h-52 w-52 rounded-full border border-black/15"
                    />

                    {/* INNER MANGA RING */}
                    <motion.div
                      initial={{
                        scale: 0.3,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.12,
                        duration: 0.7,
                      }}
                      className="absolute h-36 w-36 rounded-full border border-black/10"
                    />

                    {/* CATEGORY CIRCLE */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.6,
                        type: "spring",
                      }}
                      className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-black bg-[#f4f1ea] text-center text-xs font-black uppercase tracking-[0.12em]"
                    >
                      {project.type}
                    </motion.div>

                    <span className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                      PROJECT PANEL
                    </span>
                  </div>

                  {/* RIGHT PROJECT CONTENT */}
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.1,
                        duration: 0.5,
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-600">
                          {project.label}
                        </p>

                        {project.live && (
                          <span className="inline-flex items-center gap-2 border border-black px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em]">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            LIVE
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
                        {project.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="grid md:grid-cols-2">
                  {/* ENGINEERING */}
                  <div className="border-t-2 border-black p-7 md:border-r-2 md:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">
                      01 — ENGINEERING
                    </p>

                    <h4 className="mt-3 text-2xl font-black">What I built</h4>

                    <div className="mt-5 space-y-4">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlight}
                          initial={{
                            opacity: 0,
                            x: 15,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: highlightIndex * 0.06,
                            duration: 0.35,
                          }}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 bg-black" />

                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* PROJECT INTENT */}

                  {/* PROJECT FOCUS */}
                  <div className="border-t-2 border-black p-7 md:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">
                      02 — PROJECT FOCUS
                    </p>

                    {/* WHY IT MATTERS */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        delay: 0.12,
                        duration: 0.5,
                      }}
                    >
                      <h4 className="mt-3 text-2xl font-black">
                        Why it matters
                      </h4>

                      <p className="mt-4 text-base leading-7 text-gray-700">
                        {project.why_this}
                      </p>
                    </motion.div>

                    {/* ENGINEERING CHALLENGE */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        delay: 0.22,
                        duration: 0.5,
                      }}
                      className="mt-8 border-t border-black/20 pt-6"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                        THE ENGINEERING CHALLENGE
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-700">
                        {project.challenge}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* TECHNOLOGY */}
                <div className="border-t-2 border-black px-7 py-6 md:px-10">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                        03 — TECHNOLOGY
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="border border-black px-3 py-1.5 text-xs font-bold transition-all duration-200 hover:bg-black hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="w-fit border-2 border-black  px-5 py-2.5 text-xs font-black uppercase transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-black"
                        >
                          LIVE PROJECT ↗
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit border-2 border-black px-5 py-2.5 text-xs font-black uppercase transition-all duration-200 hover:-translate-y-1  hover:text-white"
                      >
                        VIEW SOURCE ↗
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* MANGACRAFT CALLBACK */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-center"
        >
          <NarrationBox>
            One project became part of the story itself.
          </NarrationBox>

          <SpeechBubble triggerOnView side="right" className="md:rotate-[1deg]">
            MangaCraft.
          </SpeechBubble>
        </motion.div>

        {/* PAGE FOOTER */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.5,
          }}
          className="mt-12 flex flex-col gap-3 border-t-2 border-black pt-4 text-xs font-black uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>SCENE 04 — THE WORK</span>

          <span className="text-gray-400">NEXT → BUILD LOG</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
