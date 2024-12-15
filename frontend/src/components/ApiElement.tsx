import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Api, MappingProfile } from "../types/networkingTypes"
import { getData } from "../services/apiService"
import { mapData } from "../utilities/mapData"
import writeXlsxFile from "write-excel-file"
import DropDownList from "./DropDownList"
import PopUp from "./PopUp"
import MappingElement from "./MappingElement"
import LoadingComponent from "./utils/LoadingComponent"
import MultipleChoise from "./MultipleChoise"

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
  const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false)
  const [searchParameters, setSearchParameters] = useState<string[]>([''])
  const [showParamPopUp, setShowParamPopUp] = useState<boolean>(false)
  const [dataErrorCount, setErrorCount] = useState<number>(0)

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
      setShowLoadingIcon(true)
      setMappedData(undefined)
      event.stopPropagation()
      const data = await getData(apiOnShow.id, searchParameters)
      if (data.errorCount && data.errorCount > 0) {
        setErrorCount(data.errorCount)
      }
      if (data.data) {
        const mappedData = mapData(data.data, mappingProfilesOnShow.find(element => element.id === chosenMapping)?.mapping as string[][])
        setMappedData(mappedData)
        setShowLoadingIcon(false)
      }
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

  const handleOpenParamModal = () => {
    setShowParamPopUp(true)
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
          <div className="w-fit">
            <div className="mb-8">
              <h3 className="mb-2">Available data maps</h3>
              <DropDownList stateUpdateFunction={setChosenMapping} elements={mappingProfilesOnShow.map(element => { return { elementId: element.id, elementName: element.name, elementDesc: element.mapping.length !== 1 ? `${element.mapping.length} values mapped` : `${element.mapping.length} value mapped` } })} />
              <button onClick={handleOpenModal} disabled={chosenMapping ? false : true} className="empty-button block my-2">Inspect data map</button>
            </div>
            <div className="mb-8">
              <h3 className="mb-2">Search parameters</h3>
              <button disabled={!chosenMapping} onClick={handleOpenParamModal} className="filled-button">Add search parameters</button>
              <h5 className={`text-sm ${!chosenMapping ? 'text-gray-400' : 'text-gray-800'}`}>{searchParameters.filter(element => element.length !== 0).length} parameters chosen</h5>
            </div>
            <PopUp open={showParamPopUp} updateModalState={setShowParamPopUp} >
              <div>
                <h3>Search parameters</h3>
                <MultipleChoise values={searchParameters} setValues={setSearchParameters} />
              </div>
            </PopUp>
            <button disabled={searchParameters[0] === ''} className="filled-button" onClick={handleGetData}>Get mapped data</button>
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
          {mappedData &&
            <div className="text-sm">
              {dataErrorCount && dataErrorCount > 0 ? `Could not get data for ${dataErrorCount} items. ` : ''}
              {mappedData[0].length > 5 ? 'Large result set. Only first 5 columns shown. Please download file to see full result.' : ''}
            </div>
          }
        </div>
        {showLoadingIcon &&
          <LoadingComponent />
        }
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