import { useEffect, useState } from "react"
import { MappingProfile } from "../types/networkingTypes"

interface Props {
  mappingProfile: MappingProfile | undefined
}

const MappingEditor = ({ mappingProfile }: Props) => {
  const [mappingValues, setMappingValues] = useState<string[][]>()
  const [editingMode, setEditingMode] = useState<boolean>(false)
  useEffect(() => {
    if (mappingProfile) {
      setMappingValues(mappingProfile.mapping)
    }
  }, [mappingProfile])

  if (!mappingValues || !mappingProfile) {
    return
  }

  const handleEdit = () => {
    setEditingMode(!editingMode)
  }

  return (
    <div className="m-4 mr-8">
      <div>
        <h2 className="inline-block mr-4">
          {mappingProfile.name}
        </h2>
        <button onClick={handleEdit} className="filled-button mr-4">{editingMode ? "Save changes" : "Edit"}</button>
        <button className="empty-button">Test mapping</button>
      </div>
      <div className="my-12">
        <h3>Mapped values</h3>
        <div className="grid grid-cols-4 gap-6">
          <h4>Input field</h4>
          <h4>Output field</h4>
          <h4>Function</h4>
          <h4>Result</h4>
          {mappingValues.map(element => {
            return (
              <>
                <input disabled={!editingMode} className="text-box" value={element[0]} type="text" />
                <input disabled={!editingMode} className="text-box" value={element[1]} type="text" />
                <input disabled={!editingMode} className="text-box" value={element[2]} type="text" />
                <input disabled={!editingMode} className="text-box" type="text" value={''} />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MappingEditor