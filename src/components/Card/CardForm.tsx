import { Button } from '@/components/ui/button'
import { currencies } from '@/data'
import { useCardForm } from '@/hooks/useCardForm'
import { useCryptos } from '@/hooks/useCryptos'
import { useSliceStore } from '@/hooks/useSliceStore'
import { Bitcoin, DollarSign, RefreshCw, ChevronDown } from 'lucide-react'
import { ErrorMessage } from '../ErrorMessage'

export const CardForm = () => {
  const { error, handleChangeCurrency, handleChangeCrypto, handleSubmit } =
    useCardForm()
  const { currency, crypto, cryptoName } = useSliceStore()
  const { cryptos } = useCryptos()

  return (
    <>
      {/* Form section with more padding */}
      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className='p-8'>
          <div className='mb-6'>
            <label
              htmlFor='currency'
              className='flex items-center mb-2 text-sm font-bold text-neutral-700 dark:text-neutral-300'
            >
              <DollarSign className='w-4 h-4 mr-2' />
              Moneda:
            </label>
            <div className='relative'>
              <select
                id='currency'
                value={currency}
                onChange={handleChangeCurrency}
                className='w-full p-3 text-sm border rounded-lg appearance-none bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white'
              >
                <option value='' disabled>
                  Seleccione una opción
                </option>
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name}
                  </option>
                ))}
              </select>
              <ChevronDown className='absolute w-4 h-4 -translate-y-1/2 right-4 top-1/2 text-neutral-500 dark:text-neutral-400' />
            </div>
          </div>

          <div className='mb-8'>
            <label
              htmlFor='crypto'
              className='flex items-center mb-2 text-sm font-bold text-neutral-700 dark:text-neutral-300'
            >
              <Bitcoin className='w-4 h-4 mr-2' />
              Criptomoneda:
            </label>
            <div className='relative'>
              <select
                id='crypto'
                value={crypto}
                name={cryptoName}
                onChange={handleChangeCrypto}
                className='w-full p-3 text-sm border rounded-lg appearance-none bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white'
              >
                <option value='' disabled>
                  Seleccione una opción
                </option>
                {cryptos?.map(({ CoinInfo }) => (
                  <option key={CoinInfo.Name} value={CoinInfo.Name}>
                    {CoinInfo.FullName}
                  </option>
                ))}
              </select>
              <ChevronDown className='absolute w-4 h-4 -translate-y-1/2 right-4 top-1/2 text-neutral-500 dark:text-neutral-400' />
            </div>
          </div>

          <Button
            type='submit'
            className='flex items-center justify-center w-full gap-2 font-bold text-white uppercase transition-colors rounded-lg cursor-pointer text-md py-7 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-200 dark:hover:bg-neutral-300 dark:text-neutral-900'
          >
            <RefreshCw className='w-5 h-5' />
            Cotizar
          </Button>
        </div>
      </form>
    </>
  )
}
