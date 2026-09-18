import React from 'react'
import { motion } from 'motion/react'

const PageTransition = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] h-[100dvh] w-[100vw] overflow-hidden"
      aria-hidden="true"
    >
      {/* Top ink panel */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          transformOrigin: 'top',
        }}
        className="absolute inset-x-0 top-0 h-1/2 bg-black"
      />

      {/* Bottom ink panel */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          transformOrigin: 'bottom',
        }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black"
      />
    </div>
  )
}

export default PageTransition