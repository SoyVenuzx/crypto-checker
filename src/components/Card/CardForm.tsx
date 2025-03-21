import { Button } from '@/components/ui/button'
import { Bitcoin, DollarSign, RefreshCw, ChevronDown } from 'lucide-react'

export const CardForm = () => {
  return (
    <>
      {/* Form section with more padding */}
      <div className='p-8'>
        <div className='mb-6'>
          <label
            htmlFor='currency'
            className='text-sm flex items-center font-bold text-neutral-700 dark:text-neutral-300 mb-2'
          >
            <DollarSign className='h-4 w-4 mr-2' />
            Moneda:
          </label>
          <div className='relative'>
            <select
              id='currency'
              className='w-full p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white appearance-none text-sm'
            >
              <option>Dolar de Estados Unidos</option>
              <option>Euro</option>
              <option>Libra Esterlina</option>
            </select>
            <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 h-4 w-4' />
          </div>
        </div>

        <div className='mb-8'>
          <label
            htmlFor='crypto'
            className='font-bold text-sm flex items-center  text-neutral-700 dark:text-neutral-300 mb-2'
          >
            <Bitcoin className='h-4 w-4 mr-2' />
            Criptomoneda:
          </label>
          <div className='relative'>
            <select
              id='crypto'
              className='text-sm w-full p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white appearance-none'
            >
              <option>Zeebu</option>
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Solana</option>
            </select>
            <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 h-4 w-4' />
          </div>
        </div>

        <Button
          type='submit'
          className='text-sm w-full py-7 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-200 dark:hover:bg-neutral-300 dark:text-neutral-900 text-white rounded-lg transition-colors flex items-center justify-center gap-2  font-bold uppercase'
        >
          <RefreshCw className='h-5 w-5' />
          Cotizar
        </Button>
      </div>
    </>
  )
}
