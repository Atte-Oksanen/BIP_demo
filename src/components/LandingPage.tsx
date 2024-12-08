import { Api } from "../types/networkingTypes"
import ApiCard from "./ApiCard"

interface Props {
  apis: Api[]
}


const LandingPage = ({ apis }: Props) => {
  return (
    <div className="p-4 block overflow-hidden w-full">
      <h3 className="mb-4">Available APIs</h3>
      <div className=" w-full grid grid-cols-9 gap-y-4">
        {apis.map(element => <ApiCard api={element} key={element.id} />)}
      </div>
    </div>
  )
}

export default LandingPage