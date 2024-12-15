import XIcon from "./icons/XIcon"

interface Props {
  values: string[]
  setValues: React.Dispatch<React.SetStateAction<string[]>>
}

const MultipleChoise = ({ values, setValues }: Props) => {

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempArray = values
    tempArray[Number(event.target.id)] = event.target.value
    setValues([...tempArray])
  }


  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const dataArray = event.clipboardData.getData('Text').split('\r\n')
    let startIndex = Number(event.currentTarget.id)
    const tempArray = values
    for (const value of dataArray) {
      tempArray[startIndex] = value
      startIndex++
    }
    setValues([...tempArray])
  }



  const handleAddRow = () => {
    const tempArray = values
    values.push('')
    setValues([...tempArray])
  }

  const handleDeleteRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.id)
    if (values.length === 1) {
      setValues([''])
    } else {
      const tempArray = values
      tempArray.splice(index, 1)
      setValues([...tempArray])
    }
  }

  return (
    <div className="h-full p-8 overflow-auto flex flex-col">
      {values.map((element, index) => {
        return (
          <div className="flex items-center" key={index}>
            <input onPaste={(event) => handlePaste(event)} onChange={(event) => handleTextInput(event)} id={index.toString()} type="text" value={element} className="text-box my-1" />
            <button id={index.toString()} onClick={(event) => handleDeleteRow(event)}>
              <XIcon sizeClass={"h-8 w-8"} />
            </button>
          </div>
        )
      }
      )
      }
      <button onClick={handleAddRow} className="empty-button">Add new row</button>
    </div>
  )
}


export default MultipleChoise