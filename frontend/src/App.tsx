import { Routes, Route } from "react-router"
import LandingPage from "./components/LandingPage"
import ApiElement from "./components/ApiElement"
import { useEffect, useState } from "react"
import { Api, MappingProfile } from "./types/networkingTypes"
import Header from "./components/Header"
import MappingEditor from "./components/MappingEditorView"
import { getApis } from "./services/apiService"
import { getAllMappings } from "./services/mappingService"


const App = () => {
  const [availableApis, setAvailableApis] = useState<Api[]>()
  const [availableMappingProfiles, setAvailableMappings] = useState<MappingProfile[]>()

  useEffect(() => {
    const fetchData = async () => {
      const mappingProfiles = await getAllMappings()
      const apis = await getApis()
      setAvailableApis(apis)
      setAvailableMappings(mappingProfiles)
    }
    fetchData()
  }, [])
  if (!availableApis || !availableMappingProfiles) {
    return null
  }

  return (
    <div className="w-svw h-svh overflow-hidden">
      <div className="h-full flex flex-col">
        <div>
          <h1 className="p-4 bg-red-600 font-bold text-white">BIP visual demo</h1>
          <Header />
        </div>
        <div className="h-full overflow-hidden">
          <Routes>
            <Route path="editor" element={<MappingEditor mappingProfiles={availableMappingProfiles} apis={availableApis} />} />
            <Route path="" element={<LandingPage apis={availableApis} />} />
            <Route path="api/:id" element={<ApiElement mappingProfiles={availableMappingProfiles} apis={availableApis} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
