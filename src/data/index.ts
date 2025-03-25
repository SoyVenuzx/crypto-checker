import { Currency } from '@/interfaces/crypto.interface'

export const stateInitialData = {
  currency: '',
  crypto: '',
  cryptos: [],
  detailsFlag: false,
  quote: '',
  higherPrice: '',
  lowerPrice: '',
  variation: '',
  lastUpdate: ''
}

export const currencies: Currency[] = [
  { code: 'USD', name: 'Dolar de Estados Unidos' },
  { code: 'MXN', name: 'Peso Mexicano' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'Libra Esterlina' }
]
