import { useEffect, useState } from "react"
import { MappingProfile } from "../types/networkingTypes"

interface Props {
  mappingProfile: MappingProfile | undefined
}

const MappingEditor = ({ mappingProfile }: Props) => {
  const [mappingValues, setMappingValues] = useState<string[][]>()

  useEffect(() => {
    if (mappingProfile) {
      setMappingValues(mappingProfile.mapping)
    }
  }, [mappingProfile])

  if (!mappingValues || !mappingProfile) {
    return
  }

  return (
    <div className="m-4">
      <div>
        <h2 className="inline-block mr-4">
          {mappingProfile.name}
        </h2>
        <button className="filled-button mr-4">Edit</button>
        <button className="empty-button">Test mapping</button>
      </div>
      <div className="w-[60%]">
        <h3>Mapped values</h3>
        <div className="grid grid-cols-3 gap-6">
          <h4>Input field</h4>
          <h4>Output field</h4>
          <h4>Function</h4>
        </div>
        {mappingValues.map(element => {
          return (
            <div className="grid grid-cols-3 gap-6 my-2">
              <input disabled={true} className="text-box mr-2" value={element[0]} type="text" />
              <input disabled={true} className="text-box" value={element[1]} type="text" />
              <input disabled={true} className="text-box" value={element[2]} type="text" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MappingEditor