import { useSliceStore } from '@/hooks/useSliceStore'
import { motion } from 'framer-motion'

export const CardTitle = () => {
  const { detailsFlag } = useSliceStore()

  return (
    <>
      {/* Enhanced Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='p-0 mt-10 mb-0 text-center'
      >
        <h1 className='mb-8 text-5xl font-bold tracking-tight md:text-6xl text-neutral-900 dark:text-white'>
          Cotizador de{' '}
          <span className='relative'>
            <span className='relative z-10 text-neutral-800 dark:text-neutral-200'>
              Criptomonedas
            </span>
            <span className='absolute left-0 w-full h-3 rounded-full -bottom-2 bg-neutral-200 dark:bg-neutral-800 -z-10 '></span>
          </span>
        </h1>
        {/* {!detailsFlag && ( */}
        <p className='max-w-2xl pb-0 mx-auto mb-0 text-lg text-neutral-600 dark:text-neutral-400'>
          Consulta los precios actualizados de las principales criptomonedas en
          tiempo real
        </p>
        {/* )} */}
      </motion.div>
    </>
  )
}
