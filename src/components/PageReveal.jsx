import React from 'react'
import { motion } from 'motion/react'

const PageReveal = ({
  children,
  className = '',
  direction = 'up',
}) => {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -45, rotate: -0.6 }
      : direction === 'right'
      ? { opacity: 0, x: 45, rotate: 0.6 }
      : { opacity: 0, y: 45, rotate: 0 }

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default PageReveal