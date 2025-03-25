import { SliceStore } from '@/stores/slices/slice.store'
import { useEffect } from 'react'

export const useSliceStore = () => {
  const currency = SliceStore(state => state.currency)
  const setCurrency = SliceStore(state => state.setCurrency)
  const crypto = SliceStore(state => state.crypto)
  const setCrypto = SliceStore(state => state.setCrypto)
  const cryptos = SliceStore(state => state.cryptos)
  const setCryptos = SliceStore(state => state.setCryptos)
  const detailsFlag = SliceStore(state => state.detailsFlag)
  const setDetailsFlag = SliceStore(state => state.setDetailsFlag)
  const resetApp = SliceStore(state => state.resetApp)

  return {
    currency,
    setCurrency,
    crypto,
    setCrypto,
    cryptos,
    setCryptos,
    detailsFlag,
    setDetailsFlag,
    resetApp
  }
}
