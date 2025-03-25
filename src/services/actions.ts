import { cryptoApi } from '@/api/crypto.api'
import {
  CryptoCurrenciesResponseType,
  CryptoCurrentPriceResponseType,
  Pair
} from '@/interfaces/crypto.interface'
import {
  CryptoCurrenciesResponseSchema,
  CryptoCurrentPriceSchema
} from '../schema/crypto.schema'
// import { useSliceStore } from '@/hooks/useSliceStore'

export const getCryptos = async (): Promise<CryptoCurrenciesResponseType> => {
  const {
    data: { Data }
  } = await cryptoApi.get('/top/mktcapfull?limit=20&tsym=USD')
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)

  if (!result.success) throw new Error('Failed to fetch cryptos')

  return result.data
}

export const getCryptoPrices = async (
  pair: Pair
): Promise<CryptoCurrentPriceResponseType> => {
  const { currency, crypto } = pair

  const {
    data: { DISPLAY }
  } = await cryptoApi.get(`/pricemultifull?fsyms=${crypto}&tsyms=${currency}`)

  const currentData = DISPLAY[crypto][currency]
  const result = CryptoCurrentPriceSchema.safeParse(currentData)

  if (!result.success) throw new Error('Failed to fetch crypto details')

  return result.data
}
