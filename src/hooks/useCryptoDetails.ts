import { Pair } from '@/interfaces/crypto.interface'
import { getCryptoPrices } from '@/services/actions'
import { useQuery } from '@tanstack/react-query'
import { useSliceStore } from './useSliceStore'
import { useEffect } from 'react'

export const useCryptoDetails = (pair: Pair) => {
  const { crypto, currency } = pair
  const { setCryptoDetails } = useSliceStore()

  const { data, isError, isLoading } = useQuery({
    queryKey: ['cryptoDetails', crypto, currency],
    queryFn: () => getCryptoPrices(pair),
    enabled: !!crypto && !!currency
  })

  useEffect(() => {
    if (data) {
      setCryptoDetails(data)
    }
  })

  return { isError, isLoading }
}
