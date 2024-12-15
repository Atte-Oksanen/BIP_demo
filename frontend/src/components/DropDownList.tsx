import { useState } from "react"

interface Props {
  elements: {
    elementName: string,
    elementId: string,
    elementDesc: string
  }[],
  stateUpdateFunction: React.Dispatch<React.SetStateAction<string | undefined>>
}

const DropDownList = ({ elements, stateUpdateFunction }: Props) => {
  const [showList, setShowList] = useState<boolean>(false)
  const [chosenElement, chooseElement] = useState('Choose value')

  const handleShowList = () => {
    setShowList(!showList)
  }

  const handleChooseElement = (event: React.MouseEvent<HTMLElement>) => {
    const value = event.currentTarget.getAttribute('value')
    const id = event.currentTarget.getAttribute('id')
    if (value && id) {
      chooseElement(value)
      stateUpdateFunction(id)
      setShowList(false)
    }
  }

  return (
    <div className="w-fit min-w-60">
      <div onClick={handleShowList} className={`flex justify-between items-center cursor-pointer border border-black ${showList ? 'rounded-t-md border-b-gray-100' : 'rounded-md '} py-2 px-2 `}>
        <div >{chosenElement}</div>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${showList ? 'rotate-180' : '1'} duration-300`} height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#b91c1c"><path d="M480-360 280-560h400L480-360Z" /></svg>
      </div>
      {showList &&
        <ul className="absolute z-50 rounded-b-md drop-shadow-lg w-60 bg-white h-fit max-h-[60vh] overflow-y-auto border border-black border-t-0">
          {elements.map((element, index) => {
            return (
              <li key={index} onClick={handleChooseElement} value={element.elementName} id={element.elementId} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                <h4>{element.elementName}</h4>
                <div className="text-sm text-gray-700">{element.elementDesc}</div>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default DropDownList