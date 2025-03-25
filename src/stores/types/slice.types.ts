import { CryptoCurrentPriceResponseType } from '../../interfaces/crypto.interface'
export type SliceStoreType = {
  currency: string
  crypto: string
  cryptoName: string
  detailsFlag: boolean
  cryptoDetails: CryptoCurrentPriceResponseType
  setCurrency: (currency: string) => void
  setCrypto: (crypto: string) => void
  setDetailsFlag: (value: boolean) => void
  resetApp: () => void
  setCryptoDetails: (cryptoDetails: CryptoCurrentPriceResponseType) => void
  setCryptoName: (cryptoName: string) => void
}
