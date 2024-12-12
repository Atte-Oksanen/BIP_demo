import { MappingProfile } from "../types/networkingTypes"

interface Props {
  mappingProfile: MappingProfile
}

const MappingElement = ({ mappingProfile }: Props) => {
  return (
    <div>
      <h3>
        {mappingProfile.name}
      </h3>
      <div>
        <h4>Mapping</h4>
        <table>
          <thead>
            <tr>
              <th>Input value</th>
              <th>Output value</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {mappingProfile.mapping.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element[0]}</td>
                  <td>{element[1]}</td>
                  <td>{element[2]}</td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default MappingElement