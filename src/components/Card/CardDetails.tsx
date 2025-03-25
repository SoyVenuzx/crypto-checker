import {
  Clock,
  TrendingDown,
  TrendingUp,
  BarChart4,
  Trash2
} from 'lucide-react'
import { Button } from '../ui/button'
import { useSliceStore } from '@/hooks/useSliceStore'
import { useCryptoDetails } from '@/hooks/useCryptoDetails'
import { Pair } from '@/interfaces/crypto.interface'

const DetailRow = ({
  icon: Icon,
  label,
  value,
  iconColor,
  valueColor
}: {
  icon: React.ElementType
  label: string
  value: string | undefined
  iconColor: string
  valueColor?: string
}) => (
  <div className='flex items-center justify-between p-3 transition-colors rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50'>
    <span className='flex items-center text-md'>
      <Icon className={`h-4 w-4 mr-2 ${iconColor}`} />
      {label}
    </span>
    <span
      className={`text-md font-medium ${
        valueColor ? valueColor : 'text-neutral-900 dark:text-white'
      }`}
    >
      {value}
    </span>
  </div>
)

export const CardDetails = () => {
  const { currency, crypto, cryptoDetails, cryptoName, resetApp } =
    useSliceStore()

  const { isError, isLoading } = useCryptoDetails({ crypto, currency } as Pair)

  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-8'>
        <h1>Cargando...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='flex items-center justify-center py-8'>
        <div className='p-4 text-lg text-white bg-red-500'>
          <h1>Error al cargar los dastos</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='px-8 pt-5 pb-8 border-t border-neutral-200 dark:border-neutral-800'>
      {/* Encabezado */}
      <div className='grid grid-cols-3 grid-rows-1 gap-4 mt-3 mb-6'>
        <div className='items-center justify-center col-start-2 min-flex'>
          <h2 className='flex items-center justify-center text-xl font-bold text-center text-neutral-900 dark:text-white'>
            <BarChart4 className='w-6 h-6 mr-2' />
            Cotización
          </h2>
        </div>

        <div className='flex items-center justify-end col-start-3'>
          <Button
            onClick={() => resetApp()}
            className='bg-red-500 cursor-pointer hover:bg-red-600'
          >
            <Trash2 className='w-5 h-5 text-white' />
          </Button>
        </div>
      </div>

      {/* Detalle principal */}
      <div className='flex items-center p-4 mb-6 rounded-lg bg-neutral-50 dark:bg-neutral-800/50'>
        <div className='flex items-center justify-center mr-4 rounded-full shadow-inner w-14 h-14 bg-neutral-200 dark:bg-neutral-700'>
          <img
            src={`https://cryptocompare.com/${cryptoDetails.IMAGEURL}`}
            alt='crypto logo'
          />
        </div>
        <div className='mr-2 font-bold'>
          <h2>{cryptoName}:</h2>
        </div>
        <div>
          <p className='font-medium text-md text-neutral-900 dark:text-white'>
            El precio es de:{' '}
            <span className='font-bold'>{cryptoDetails?.PRICE}</span>
          </p>
        </div>
      </div>

      {/* Detalles adicionales */}
      <div className='space-y-1 text-neutral-700 dark:text-neutral-300'>
        <DetailRow
          icon={TrendingUp}
          label='Precio más alto del día:'
          value={cryptoDetails?.HIGHDAY}
          iconColor='text-green-500'
        />
        <DetailRow
          icon={TrendingDown}
          label='Precio más bajo del día:'
          value={cryptoDetails?.LOWDAY}
          iconColor='text-red-500'
        />
        <DetailRow
          icon={BarChart4}
          label='Variación últimas 24 horas:'
          value={cryptoDetails?.CHANGEPCT24HOUR}
          iconColor='text-blue-500'
          valueColor='text-red-500'
        />
        <DetailRow
          icon={Clock}
          label='Última actualización:'
          value={cryptoDetails?.LASTUPDATE}
          iconColor='text-neutral-500'
        />
      </div>
    </div>
  )
}
