import axios from "axios"
import { MappingProfile } from "../types/networkingTypes"

let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3001'
} else {
  BASE_URL = 'https://bip-demo-3wy6.onrender.com'
}

BASE_URL = BASE_URL + '/mapping'



export const getAllMappings = async (): Promise<MappingProfile[]> => {
  return (await (axios.get(BASE_URL))).data
}