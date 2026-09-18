import React from 'react'
import { motion } from 'motion/react'

const SpeechBubble = ({
  children,
  side = 'left',
  className = '',
  triggerOnView = false,
}) => {
  const animationProps = triggerOnView
    ? {
        initial: {
          opacity: 0,
          scale: 0.7,
          rotate: -4,
        },
        whileInView: {
          opacity: 1,
          scale: 1,
          rotate: -2,
        },
        viewport: {
          once: true,
          amount: 0.35,
        },
      }
    : {
        initial: {
          opacity: 0,
          scale: 0.7,
          rotate: -4,
        },
        animate: {
          opacity: 1,
          scale: 1,
          rotate: -2,
        },
      }

  return (
    <motion.div
      {...animationProps}
      transition={{
        delay: triggerOnView ? 0.15 : 1.35,
        duration: 0.55,
        type: 'spring',
        stiffness: 140,
        damping: 12,
      }}
      className={`relative z-20 w-[210px] rounded-[48%] border-[3px] border-black bg-[#f4f1ea] px-7 py-6 text-center text-sm font-black leading-6 shadow-[5px_5px_0_#111] ${className}`}
    >
      {children}

      {/* Main speech tail */}
      <span
        className={`absolute -bottom-[20px] ${
          side === 'right'
            ? 'right-[42px]'
            : 'left-[42px]'
        } h-7 w-7 rotate-45 border-b-[3px] border-r-[3px] border-black bg-[#f4f1ea]`}
      />

      {/* Inner tail cover */}
      <span
        className={`absolute -bottom-[13px] ${
          side === 'right'
            ? 'right-[47px]'
            : 'left-[47px]'
        } h-5 w-5 rotate-45 bg-[#f4f1ea]`}
      />
    </motion.div>
  )
}

export default SpeechBubble