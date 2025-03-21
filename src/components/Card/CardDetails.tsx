import { Clock, TrendingDown, TrendingUp, BarChart4 } from 'lucide-react'

export const CardDetails = () => {
  return (
    <div className='border-t border-neutral-200 dark:border-neutral-800 p-8'>
      <h2 className='text-2xl font-bold text-center mb-6 text-neutral-900 dark:text-white flex items-center justify-center'>
        <BarChart4 className='h-6 w-6 mr-2' />
        Cotización
      </h2>

      <div className='flex items-center mb-6 bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg'>
        <div className='w-14 h-14 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mr-4 shadow-inner'>
          <span className='text-xl font-bold'>Z</span>
        </div>
        <div>
          <p className='text-lg font-medium text-neutral-900 dark:text-white'>
            El precio es de: <span className='font-bold'>$ 3.81</span>
          </p>
        </div>
      </div>

      <div className='space-y-4 text-neutral-700 dark:text-neutral-300'>
        <div className='flex justify-between items-center p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors'>
          <span className='flex items-center'>
            <TrendingUp className='h-4 w-4 mr-2 text-green-500' />
            Precio más alto del día:
          </span>
          <span className='font-medium text-neutral-900 dark:text-white'>
            $ 3.81
          </span>
        </div>
        <div className='flex justify-between items-center p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors'>
          <span className='flex items-center'>
            <TrendingDown className='h-4 w-4 mr-2 text-red-500' />
            Precio más bajo del día:
          </span>
          <span className='font-medium text-neutral-900 dark:text-white'>
            $ 3.80
          </span>
        </div>
        <div className='flex justify-between items-center p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors'>
          <span className='flex items-center'>
            <BarChart4 className='h-4 w-4 mr-2 text-blue-500' />
            Variación últimas 24 horas:
          </span>
          <span className='font-medium text-red-500'>-3.28</span>
        </div>
        <div className='flex justify-between items-center p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-lg transition-colors'>
          <span className='flex items-center'>
            <Clock className='h-4 w-4 mr-2 text-neutral-500' />
            Última actualización:
          </span>
          <span className='font-medium text-neutral-900 dark:text-white'>
            1 min ago
          </span>
        </div>
      </div>
    </div>
  )
}
