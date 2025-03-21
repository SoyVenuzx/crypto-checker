import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SliceStoreType } from '../types/slice.types'

export const SliceStore = create<SliceStoreType>()(
  devtools(
    persist(
      set => ({
        currency: '',
        crypto: '',
        quote: '',
        higherPrice: '',
        lowerPrice: '',
        variation: '',
        lastUpdate: ''
      }),
      {
        name: 'slice-store',
        partialize: state => ({ state: state })
      }
    )
  )
)
