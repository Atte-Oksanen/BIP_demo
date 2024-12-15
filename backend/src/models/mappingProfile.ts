import { Schema, model } from "mongoose"
import { MappingProfile } from "../types/dbTypes"

const mappingSchema = new Schema<MappingProfile>({
  name: String,
  apiId: String,
  mapping: [[String]]
})


mappingSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  }
})

export const MappingModel = model('Mapping', mappingSchema)