import { useState } from "react"
import { Api, MappingProfile } from "../types/networkingTypes"
import MappingEditor from "./MappingEditor"

interface Props {
  mappingProfiles: MappingProfile[],
  apis: Api[]
}

const MappingEditorView = ({ mappingProfiles, apis }: Props) => {
  const [chosenMapping, setChosenMapping] = useState<string>()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const handleChooseMapping = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.getAttribute('id')
    if (id) {
      setChosenMapping(id)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="h-full m-4 overflow-hidden grid grid-cols-[24rem_auto]">
      <div className="pr-12 border-r h-full overflow-hidden">
        <div>
          <h2 className="m-4 mb-0 inline-block">Mappings</h2>
          <button className="filled-button">Create new</button>
        </div>
        <div>
          <input value={searchTerm} onChange={handleSearch} className="m-4 text-box w-full" placeholder="Search mappings" type="text" />
        </div>
        <div className="ml-4 border-2 rounded-md w-full overflow-y-auto max-h-[65svh]">
          {searchTerm === '' && apis.map(element => {
            return (
              <div key={element.id} className="border-b">
                <div>
                  <div className="p-2 font-semibold">
                    {element.name}
                  </div>
                  {mappingProfiles.filter(mappingElement => element.id === mappingElement.apiId).map((mappingElement, index) => {
                    return (
                      <div key={index} className={`${mappingElement.id === chosenMapping ? 'bg-gray-100 border-red-600' : 'hover:border-gray-100 border-white'} border-l-4 p-1 duration-150 indent-6 cursor-pointer hover:bg-gray-100`} id={mappingElement.id} onClick={handleChooseMapping}>{mappingElement.name}</div>
                    )
                  })}
                </div>
              </div>
            )
          })}
          {searchTerm !== '' && mappingProfiles.filter(element => element.name.includes(searchTerm)).map(element => {
            return (
              <div id={element.id} onClick={handleChooseMapping} className={`${element.id === chosenMapping ? 'bg-gray-100 border-red-600' : 'border-gray-100'} border-l-4 p-1 duration-150 indent-6 cursor-pointer hover:bg-gray-100`}>
                <div>
                  {element.name}
                </div>
                <div className="text-sm text-gray-800 indent-6">
                  Created for {apis.find(apiElement => apiElement.id === element.apiId)?.name}
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="h-full overflow-auto">
        {chosenMapping &&
          <MappingEditor api={apis.find(apiElement => mappingProfiles.find(element => element.id === chosenMapping)?.apiId === apiElement.id)} mappingProfile={mappingProfiles.find(element => element.id === chosenMapping)} />
        }
      </div>
    </div>
  )
}

export default MappingEditorView