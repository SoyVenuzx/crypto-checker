import { motion } from 'framer-motion'

export const CardTitle = () => {
  return (
    <>
      {/* Enhanced Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-12 text-center'
      >
        <h1 className='text-5xl md:text-6xl font-bold mb-3 text-neutral-900 dark:text-white tracking-tight'>
          Cotizador de{' '}
          <span className='relative'>
            <span className='relative z-10 text-neutral-800 dark:text-neutral-200'>
              Criptomonedas
            </span>
            <span className='absolute -bottom-2 left-0 w-full h-3 bg-neutral-200 dark:bg-neutral-800 -z-10 rounded-full '></span>
          </span>
        </h1>
        {/* <p className='text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto'>
          Consulta los precios actualizados de las principales criptomonedas en
          tiempo real
        </p> */}
      </motion.div>
    </>
  )
}
