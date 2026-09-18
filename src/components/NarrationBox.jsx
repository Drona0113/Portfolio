import React from 'react'
import { motion } from 'motion/react'

const NarrationBox = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45 }}
      className={`w-fit border-2 border-black bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default NarrationBox