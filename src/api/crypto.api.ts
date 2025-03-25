import axios from 'axios'

const baseURL = 'https://min-api.cryptocompare.com/data/top'

const cryptoApi = axios.create({
  baseURL
})

export { cryptoApi }
