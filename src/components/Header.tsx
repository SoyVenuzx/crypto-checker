import { motion } from 'framer-motion'
import { ModeToggle } from './mode-toggle'

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='fixed top-0 left-0 right-0 z-40 px-16 shadow-lg bg-gray-50 dark:bg-zinc-950 dark:text-white'
    >
      <div className='flex items-center justify-between m-5'>
        <div>
          <h1 className='text-xl font-bold'>Crypto Checker</h1>
        </div>
        <div className='flex items-center gap-3 text-center'>
          <ModeToggle />
          <h2 className='font-bold'>Change theme</h2>
        </div>
      </div>
    </motion.div>
  )
}
