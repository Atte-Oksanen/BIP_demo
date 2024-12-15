import axios from "axios"
import { Api } from "../types/networkingTypes"

let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3001'
} else {
  BASE_URL = 'https://bip-demo-3wy6.onrender.com'
}

BASE_URL = BASE_URL + '/apis'



export const getData = async (apiId: string, parameters: string[]) => {
  const requestObj = { api: apiId, parameters: parameters.filter(element => element.length !== 0) }
  const data = (await axios.post(BASE_URL + '/data', requestObj)).data
  return data
}

export const getApis = async (): Promise<Api[]> => {
  return (await axios.get(BASE_URL)).data
}