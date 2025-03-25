import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SliceStoreType } from '../types/slice.types'
import { stateInitialData } from '@/data'

export const SliceStore = create<SliceStoreType>()(
  devtools(
    persist(
      set => ({
        currency: '',
        crypto: '',
        cryptos: [],
        detailsFlag: false,
        quote: '',
        higherPrice: '',
        lowerPrice: '',
        variation: '',
        lastUpdate: '',
        setCurrency: currency => set({ currency }),
        setCrypto: crypto => set({ crypto }),
        setCryptos: cryptos => set({ cryptos }),
        setDetailsFlag: value => set({ detailsFlag: value }),
        resetApp: () => set(stateInitialData)
      }),
      {
        name: 'slice-store',
        partialize: state => ({ state: state })
      }
    )
  )
)
