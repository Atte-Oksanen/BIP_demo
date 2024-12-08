export interface Api {
  name: string,
  address: string,
  id: string
}


export interface MappingProfile {
  id: string,
  apiId: string,
  name: string,
  mapping: string[][]
}


