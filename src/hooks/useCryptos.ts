import { getCryptos } from '@/services/actions'
import { useQuery } from '@tanstack/react-query'

export const useCryptos = () => {
  const {
    data: cryptos,
    error,
    isLoading
  } = useQuery({
    queryKey: ['crypto'],
    queryFn: () => getCryptos(),
    staleTime: 1000 * 60 * 60
  })

  return { cryptos, error, isLoading }
}
