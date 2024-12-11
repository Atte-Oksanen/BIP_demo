import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Api, MappingProfile } from "../types/networkingTypes"
import { getData } from "../services/apiService"
import { flattenObject, mapData } from "../utilities/mapData"
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
  const [sampleData, setSampleData] = useState<string[][][]>()
  const [mappingModalOpen, setMappingModalOpen] = useState<boolean>(false)
  const [sampleDataModalOpen, setSampleModalOpen] = useState<boolean>(false)

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
      const mappedData = mapData(data, mappingProfilesOnShow.find(element => element.id === chosenMapping) as MappingProfile)
      setMappedData(mappedData)
    }
  }


  const handleGetSample = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    if (!sampleData) {
      const data = await getData(apiOnShow)
      const flattenedData = flattenObject(data)
      setSampleData(flattenedData)
    }
    setSampleModalOpen(true)
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

  const handleDownloadSample = async () => {
    if (sampleData) {
      const formattedData: { value: string }[][] = []
      let startIndex = 0
      for (const row of sampleData) {
        formattedData.push([])
        formattedData.push([])
        for (const twoCells of row) {
          formattedData[startIndex].push({ value: twoCells[0] })
          formattedData[startIndex + 1].push({ value: twoCells[1] })
        }
        formattedData.push([])
        startIndex += 3
      }
      await writeXlsxFile(formattedData, { fileName: `SAMPLE_${apiOnShow.name}_${new Date().toLocaleDateString('en-GB')}_${new Date().toLocaleTimeString('en-GB')}.xlsx` })

    }
  }


  const handleOpenModal = () => {
    setMappingModalOpen(true)
  }

  return (
    <div className="h-full p-4">
      <div className="h-[80svh] overflow-x-auto overflow-y-auto">
        <div className="my-4">
          <h2 className="mb-8 font-bold">{apiOnShow.name}</h2>
          <button className="empty-button" onClick={handleGetSample}>Get data sample</button>
        </div>
        {sampleData &&
          <PopUp open={sampleDataModalOpen} updateModalState={setSampleModalOpen}>
            <div>
              <div className="overflow-x-scroll my-3">
                {sampleData.sort((a, b) => a.length > b.length ? -1 : 1).map((sampleSet, index) => {
                  return (
                    <table key={index}>
                      <thead>
                        <tr>
                          {sampleSet.map((element, index) => <th key={index}>{element[0]}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {sampleSet.map((element, index) => <td key={index}>{element[1]}</td>)}
                        </tr>
                      </tbody>
                    </table>
                  )
                })}
              </div>
              <button className="empty-button" onClick={handleDownloadSample}>Download in Excel-format</button>
            </div>
          </PopUp>
        }

        <div>
          <h3 className="mb-4">Available data maps</h3>
          <div className="grid grid-cols-2 w-fit gap-2">
            <DropDownList stateUpdateFunction={setChosenMapping} elements={mappingProfilesOnShow.map(element => { return { elementId: element.id, elementName: element.name, elementDesc: element.mapping.length !== 1 ? `${element.mapping.length} values mapped` : `${element.mapping.length} value mapped` } })} />
            <button onClick={handleOpenModal} disabled={chosenMapping ? false : true} className="empty-button">Inspect data map</button>
          </div>
          {mappingProfilesOnShow && chosenMapping &&
            <PopUp open={mappingModalOpen} updateModalState={setMappingModalOpen}>
              <MappingElement mappingProfile={mappingProfilesOnShow.find(element => element.id === chosenMapping) as MappingProfile} />
            </PopUp>
          }
        </div>
        {mappedData &&
          <div className="bg-white w-fit h-fit pb-24">
            <h3>Returned data</h3>
            <button className="empty-button my-2" onClick={handleDownloadData}>Download in Excel-format</button>
            <div>
              <table>
                <thead>
                  <tr>
                    {mappedData[0].map((element, index) => <th key={index}>{element}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {mappedData.slice(1).map((row, index) => {
                    return (<tr key={index}>
                      {row.map((element, subIndex) => <td key={subIndex}>{element}</td>)}
                    </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
      <div className=" p-3 flex justify-end content-center fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t-2">
        <button disabled={chosenMapping ? false : true} className="filled-button" onClick={handleGetData}>Get mapped data</button>
      </div>
    </div>
  )
}

export default ApiElement