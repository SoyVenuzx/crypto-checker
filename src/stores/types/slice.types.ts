import { CryptoCurrenciesResponseType } from '@/interfaces/crypto.interface'

export type SliceStoreType = {
  currency: string
  crypto: string
  cryptos: CryptoCurrenciesResponseType
  detailsFlag: boolean
  quote: string
  higherPrice: string
  lowerPrice: string
  variation: string
  lastUpdate: string
  setCurrency: (currency: string) => void
  setCrypto: (crypto: string) => void
  setCryptos: (cryptos: CryptoCurrenciesResponseType) => void
  setDetailsFlag: (value: boolean) => void
  resetApp: () => void
}
