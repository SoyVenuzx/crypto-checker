import { motion } from 'framer-motion'
import { CardForm } from './CardForm'
import { useEffect } from 'react'
import { CardDetails } from './CardDetails'

export const MainCard = () => {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <div className='relative z-20 container mx-auto px-4 md:px-6 py-16 flex flex-col items-center overflow-hiiden'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='min-w-[700px] w-full max-w-lg bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mt-20'
        >
          <CardForm />
          <CardDetails />
        </motion.div>
      </div>
    </>
  )
}
