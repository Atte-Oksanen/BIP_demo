import axios from "axios"
import { Api } from "../types/networkingTypes"

const BASE_URL = 'http://localhost:3001/apis'


export const getData = async (apiId: string, parameters: string[]) => {
  const requestObj = { api: apiId, parameters: parameters.filter(element => element.length !== 0) }
  const data = (await axios.post(BASE_URL + '/data', requestObj)).data
  return data
}

export const getApis = async (): Promise<Api[]> => {
  return (await axios.get(BASE_URL)).data
}