import { SliceStore } from '@/stores/slices/slice.store'

export const useSliceStore = () => {
  const currency = SliceStore(state => state.currency)
  const setCurrency = SliceStore(state => state.setCurrency)
  const crypto = SliceStore(state => state.crypto)
  const setCrypto = SliceStore(state => state.setCrypto)
  const detailsFlag = SliceStore(state => state.detailsFlag)
  const setDetailsFlag = SliceStore(state => state.setDetailsFlag)
  const resetApp = SliceStore(state => state.resetApp)
  const cryptoDetails = SliceStore(state => state.cryptoDetails)
  const setCryptoDetails = SliceStore(state => state.setCryptoDetails)
  const cryptoName = SliceStore(state => state.cryptoName)
  const setCryptoName = SliceStore(state => state.setCryptoName)

  return {
    currency,
    setCurrency,
    crypto,
    setCrypto,
    detailsFlag,
    setDetailsFlag,
    resetApp,
    cryptoDetails,
    setCryptoDetails,
    cryptoName,
    setCryptoName
  }
}
