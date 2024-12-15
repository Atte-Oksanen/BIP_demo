import { Api } from "../types/networkingTypes"
import ApiCard from "./ApiCard"

interface Props {
  apis: Api[]
}


const LandingPage = ({ apis }: Props) => {
  return (
    <div className="p-4 block overflow-hidden w-full">
      <h2 className="m-4 mb-8 inline-block">Available APIs</h2>
      <button className="filled-button">Request new API</button>
      <div className="w-full flex flex-wrap flex-auto">
        {apis.map(element => <ApiCard api={element} key={element.id} />)}
      </div>
    </div>
  )
}

export default LandingPage