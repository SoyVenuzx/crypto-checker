import axios from 'axios'

const baseURL = 'https://min-api.cryptocompare.com/data'

const cryptoApi = axios.create({
  baseURL
})

export { cryptoApi }
