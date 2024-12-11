import { Api } from "../types/networkingTypes"
import ApiCard from "./ApiCard"

interface Props {
  apis: Api[]
}


const LandingPage = ({ apis }: Props) => {
  return (
    <div className="p-4 block overflow-hidden w-full">
      <h3 className="mb-4">Available APIs</h3>
      <div className="w-full flex flex-wrap flex-auto">
        {apis.map(element => <ApiCard api={element} key={element.id} />)}
      </div>
    </div>
  )
}

export default LandingPage