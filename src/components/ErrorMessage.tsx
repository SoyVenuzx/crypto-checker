import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ErrorMessageProps {
  children: React.ReactNode
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  })

  const animations = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial='initial'
          animate='visible'
          exit='exit'
          variants={animations}
          className='min-h-full py-2 text-lg font-bold text-center text-white bg-red-700 shadow-md'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
