import { SliceStore } from '@/stores/slices/slice.store'

export const useSliceStore = () => {
  const state = SliceStore(state => state)

  return { state }
}
