import { z } from 'zod'
import {
  CryptoCurrenciesResponseSchema,
  CryptoCurrencyResponseSchema,
  CryptoCurrentPriceSchema
} from '../schema/crypto.schema'
import { CurrencySchema } from '@/schema/crypto.schema'

export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrencyResponseType = z.infer<
  typeof CryptoCurrencyResponseSchema
>

export type CryptoCurrenciesResponseType = z.infer<
  typeof CryptoCurrenciesResponseSchema
>

export type CryptoCurrentPriceResponseType = z.infer<
  typeof CryptoCurrentPriceSchema
>

export interface Pair {
  currency: string
  crypto: string
}
