import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SliceStoreType } from '../types/slice.types'
import { stateInitialData } from '@/data'
import { CryptoCurrentPriceResponseType } from '@/interfaces/crypto.interface'

export const SliceStore = create<SliceStoreType>()(
  devtools(
    persist(
      set => ({
        currency: '',
        crypto: '',
        cryptoName: '',
        detailsFlag: false,
        cryptoDetails: {} as CryptoCurrentPriceResponseType,
        setCurrency: currency => set({ currency }),
        setCrypto: crypto => set({ crypto }),
        setDetailsFlag: value => set({ detailsFlag: value }),
        resetApp: () => set(stateInitialData),
        setCryptoDetails: cryptoDetails => {
          set({ cryptoDetails })
        },
        setCryptoName: cryptoName => set({ cryptoName })
      }),
      {
        name: 'slice-store',
        partialize: state => ({
          currency: state.currency,
          crypto: state.crypto,
          cryptoDetails: state.cryptoDetails,
          detailsFlag: state.detailsFlag
        })
      }
    )
  )
)
