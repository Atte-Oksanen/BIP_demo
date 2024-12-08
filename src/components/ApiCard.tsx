import { Link } from "react-router"
import { Api } from "../types/networkingTypes"

interface Props {
  api: Api
}

const ApiCard = ({ api }: Props) => {
  return (
    <Link className="api-button"
      to={`api/${api.id}`}>
      <h2 className="text-lg">{api.name}</h2>
    </Link>
  )
}

export default ApiCard