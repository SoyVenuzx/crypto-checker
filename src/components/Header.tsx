import { motion } from 'framer-motion'
import { ModeToggle } from './mode-toggle'

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='fixed top-0 right-0 left-0 z-40 bg-gray-50 shadow-lg dark:bg-zinc-950 dark:text-white'
    >
      <div className='flex justify-between items-center m-5'>
        <div>
          <h1 className='font-bold text-xl'>Crypto Checker</h1>
        </div>
        <div className='flex gap-3 items-center text-center'>
          <ModeToggle />
          <h2 className='font-bold'>Change theme</h2>
        </div>
      </div>
    </motion.div>
  )
}
