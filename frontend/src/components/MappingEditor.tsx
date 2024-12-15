import { useEffect, useState } from "react"
import { Api, MappingProfile } from "../types/networkingTypes"
import { getData } from "../services/apiService"
import { mapData } from "../utilities/mapData"

interface Props {
  mappingProfile: MappingProfile | undefined
  api: Api | undefined
}

const MappingEditor = ({ mappingProfile, api }: Props) => {
  const [mappingValues, setMappingValues] = useState<string[][]>()
  const [editingMode, setEditingMode] = useState<boolean>(false)
  const [mappedValues, setMappedData] = useState<string[][] | null>()
  useEffect(() => {
    if (mappingProfile) {
      setMappingValues(mappingProfile.mapping)
    }
    setMappedData(null)
  }, [mappingProfile])

  if (!mappingValues || !mappingProfile) {
    return
  }

  const handleEdit = () => {
    setEditingMode(!editingMode)
  }

  const joinMaps = () => {
    const joinedMaps: string[][] = []
    if (mappingValues && mappedValues) {
      for (let i = 0; i < mappingValues.length; i++) {
        const mappedValue = mappedValues.map(element => element[i]).slice(1).filter(element => element)[0]
        joinedMaps.push(mappingValues[i].concat(mappedValue))
      }
    }
    return joinedMaps
  }

  const handleGetData = async (event: React.MouseEvent<HTMLElement>) => {
    if (mappingValues && api) {
      event.stopPropagation()
      const data = await getData(api)
      const mappedData = mapData(data, mappingValues)
      setMappedData(mappedData)
    }
  }
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="h-fit p-4">
        <h2 className="inline-block mr-4">
          {mappingProfile.name}
        </h2>
        <button onClick={handleEdit} className="filled-button mr-4">{editingMode ? "Save changes" : "Edit"}</button>
        <button onClick={handleGetData} className="empty-button">Test mapping</button>
        {mappedValues && <div className=" mt-2 text-sm">Results aggregated to fill result</div>}
      </div>
      <div className="h-full flex flex-col overflow-hidden">
        <div className="border-b p-4">
          <h3 className="">Mapped values</h3>
          <div className="grid grid-cols-4 gap-6">
            <h4>Input field</h4>
            <h4>Output field</h4>
            <h4>Function</h4>
            <h4>Result</h4>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 max-h-full overflow-auto p-4">
          {!mappedValues && mappingValues.map(element => {
            return (
              <>
                <input disabled={!editingMode} className="text-box" value={element[0]} type="text" />
                <input disabled={!editingMode} className="text-box" value={element[1]} type="text" />
                <input disabled={!editingMode} className="text-box" value={element[2]} type="text" />
                <input disabled={!editingMode} className="text-box" type="text" readOnly value={''} />
              </>
            )
          })}
          {mappedValues && joinMaps().map(element => {
            return (
              <>
                <input disabled={!editingMode} className="text-box" value={element[0]} type="text" />
                <input disabled={!editingMode} className="text-box" value={element[1]} type="text" />
                <input disabled={!editingMode} className="text-box" value={element[2]} type="text" />
                <input disabled={!editingMode} className="text-box" type="text" value={element[3]} />
              </>
            )
          })}

        </div>
      </div>
    </div >
  )
}

export default MappingEditor