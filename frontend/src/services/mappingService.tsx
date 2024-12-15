import axios from "axios"
import { MappingProfile } from "../types/networkingTypes"

const BASE_URL = 'http://localhost:3001/mapping'

export const getAllMappings = async (): Promise<MappingProfile[]> => {
  return (await (axios.get(BASE_URL))).data
}