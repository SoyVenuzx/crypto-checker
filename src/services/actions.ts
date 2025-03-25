import { cryptoApi } from '@/api/crypto.api'
import { CryptoCurrenciesResponseType } from '@/interfaces/crypto.interface'
import { CryptoCurrenciesResponseSchema } from '../schema/crypto.schema'

export const getCryptos = async (): Promise<CryptoCurrenciesResponseType> => {
  const {
    data: { Data }
  } = await cryptoApi.get('/mktcapfull?limit=20&tsym=USD')
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)

  if (!result.success) return []

  return result.data
}
