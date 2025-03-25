import { motion } from 'framer-motion'
import { CardForm } from './CardForm'
import { useEffect } from 'react'
import { CardDetails } from './CardDetails'
import { CardTitle } from './CardTitle'
import { useSliceStore } from '@/hooks/useSliceStore'

export const MainCard = () => {
  const { detailsFlag } = useSliceStore()

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <div className='container relative z-20 flex flex-col items-center px-4 pt-16 pb-8 mx-auto md:px-6 overflow-hiiden'>
        <CardTitle />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='min-w-[700px] w-full max-w-lg bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mt-8'
        >
          <CardForm />
          {detailsFlag && <CardDetails />}
        </motion.div>
      </div>
    </>
  )
}
