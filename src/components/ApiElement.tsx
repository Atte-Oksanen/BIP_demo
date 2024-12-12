import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Api, MappingProfile } from "../types/networkingTypes"
import { getData } from "../services/apiService"
import { mapData } from "../utilities/mapData"
import writeXlsxFile from "write-excel-file"
import DropDownList from "./DropDownList"
import PopUp from "./PopUp"
import MappingElement from "./MappingElement"

interface Props {
  apis: Api[]
  mappingProfiles: MappingProfile[]
}

const ApiElement = ({ apis, mappingProfiles }: Props) => {
  const params = useParams()
  const [apiOnShow, setApiOnShow] = useState<Api>()
  const [mappingProfilesOnShow, setMappingProfiles] = useState<MappingProfile[]>()
  const [chosenMapping, setChosenMapping] = useState<string>()
  const [mappedData, setMappedData] = useState<string[][]>()
  const [mappingModalOpen, setMappingModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const id = params.id
    const api = apis.find(element => element.id === id)
    setApiOnShow(api)
    const tempMappingProfiles = mappingProfiles.filter(element => element.apiId === id)
    setMappingProfiles(tempMappingProfiles)
  }, [])

  useEffect(() => {
    setMappedData(undefined)
  }, [chosenMapping])


  if (!apiOnShow || !mappingProfilesOnShow) {
    return null
  }

  const handleGetData = async (event: React.MouseEvent<HTMLElement>) => {
    if (chosenMapping) {
      event.stopPropagation()
      const data = await getData(apiOnShow)
      const mappedData = mapData(data, mappingProfilesOnShow.find(element => element.id === chosenMapping)?.mapping as string[][])
      setMappedData(mappedData)
    }
  }

  const handleDownloadData = async () => {
    if (mappedData) {
      const formattedData: object[][] = []
      for (const row of mappedData) {
        formattedData.push(row.map(element => { return { value: element } }))
      }
      await writeXlsxFile(formattedData, { fileName: `${apiOnShow.name}_${new Date().toLocaleDateString('en-GB')}_${new Date().toLocaleTimeString('en-GB')}.xlsx` })
    }
  }


  const handleOpenModal = () => {
    setMappingModalOpen(true)
  }

  return (
    <div className="h-full grid grid-cols-[22rem_auto] overflow-hidden">
      <div className="h-full p-4 border-r">
        <div className="my-1">
          <h2 className="mb-8">{apiOnShow.name}</h2>
        </div>
        <div>
          <h3 className="mb-4">Available data maps</h3>
          <div className="w-fit">
            <DropDownList stateUpdateFunction={setChosenMapping} elements={mappingProfilesOnShow.map(element => { return { elementId: element.id, elementName: element.name, elementDesc: element.mapping.length !== 1 ? `${element.mapping.length} values mapped` : `${element.mapping.length} value mapped` } })} />
            <button onClick={handleOpenModal} disabled={chosenMapping ? false : true} className="empty-button block my-4">Inspect data map</button>
            <button disabled={chosenMapping ? false : true} className="filled-button" onClick={handleGetData}>Get mapped data</button>
          </div>
          {mappingProfilesOnShow && chosenMapping &&
            <PopUp open={mappingModalOpen} updateModalState={setMappingModalOpen}>
              <MappingElement mappingProfile={mappingProfilesOnShow.find(element => element.id === chosenMapping) as MappingProfile} />
            </PopUp>
          }
        </div>
      </div>
      <div className="h-full flex flex-col overflow-hidden">
        <div className="p-4 h-26 border-b pb-4">
          <h2 className="inline-block mr-4">Returned data</h2>
          <button disabled={!mappedData} className="empty-button my-2" onClick={handleDownloadData}>Download Excel</button>
          {mappedData && mappedData[0].length > 5 &&
            <div className="text-sm">Large result set. Only first 5 columns shown. Please download file to see full result.</div>
          }
        </div>
        {mappedData &&
          <>
            <div className="overflow-auto h-full">
              <div>
                <table className="m-4">
                  <thead>
                    <tr>
                      {mappedData[0].slice(0, 5).map((element, index) => <th key={index}>{element}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {mappedData.slice(1).map((row, index) => {
                      return (<tr key={index}>
                        {row.slice(0, 5).map((element, subIndex) => <td key={subIndex}>{element}</td>)}
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default ApiElement