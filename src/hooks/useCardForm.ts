import React, { useState } from 'react'
import { useSliceStore } from './useSliceStore'
import { sleep } from '@/lib/utils'

export const useCardForm = () => {
  const {
    crypto,
    currency,
    setCurrency,
    setCrypto,
    setDetailsFlag,
    setCryptoName
  } = useSliceStore()
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values({ crypto, currency }).includes('')) {
      setError('Todos los campos son obligatorios!')
      await sleep(2)
      setError('')
      return
    }
    setDetailsFlag(true)
  }

  const handleChangeCurrency = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(value)
  }

  const handleChangeCrypto = ({
    target: { value, options, selectedIndex }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCryptoName(options[selectedIndex].text)
    setCrypto(value)
  }

  return { handleSubmit, handleChangeCurrency, handleChangeCrypto, error }
}
