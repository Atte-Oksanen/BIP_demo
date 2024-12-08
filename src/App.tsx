import { Routes, Route } from "react-router"
import LandingPage from "./components/LandingPage"
import ApiElement from "./components/ApiElement"
import { useState } from "react"
import { Api, MappingProfile } from "./types/networkingTypes"

//TLIFBC092
const availableAPIS = [
  {
    name: 'test API',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '1234'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'Really long name for an api',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
  {
    name: 'test API 2',
    address: 'https://www.laattapiste.fi/api/v1.0/product/',
    id: '4321'
  },
]

const availableMappingProfiles: MappingProfile[] = [
  {
    apiId: '1234',
    id: '45678',
    name: 'test mapping',
    mapping: [
      ['itemCode', 'SupplierProdNumber']
    ]
  },
  {
    apiId: '1234',
    id: '5678',
    name: 'test mapping 2',
    mapping: [
      ['itemCode', 'SupplierProdNumber'],
      ['name', 'prodName']
    ]
  },
  {
    apiId: '1234',
    id: '6789',
    name: 'test mapping 3',
    mapping: [
      ['itemCode', 'SupplierProdNumber'],
      ['name', 'prodName'],
      ['gtin', 'ean'],
      ['attributes.Laatanlasitus', 'lasitus'],
      ['netPrice.moneyAmount', 'ostohinta']

    ]
  },
  {
    apiId: '4321',
    id: '5678',
    name: 'test mapping 2',
    mapping: [
      ['itemCode', 'SupplierProdNumber'],
      ['name', 'prodName']
    ]
  }
]





const App = () => {
  const [availableApis] = useState<Api[]>(availableAPIS)
  const [mappingProfiles] = useState<MappingProfile[]>(availableMappingProfiles)
  return (
    <div className="w-screen overflow-x-hidden">
      <h1 className="p-4 bg-red-600 font-bold text-white">BIP visual demo</h1>
      <Routes>
        <Route path="" element={<LandingPage apis={availableAPIS} />} />
        <Route path="api/:id" element={<ApiElement mappingProfiles={mappingProfiles} apis={availableApis} />} />
      </Routes>
    </div>
  )
}

export default App
