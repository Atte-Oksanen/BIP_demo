import { Schema, model } from "mongoose"
import { Api } from "../types/dbTypes"

const apiSchema = new Schema<Api>({
  address: String,
  name: String,
})


apiSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  }
})

export const ApiModel = model('Api', apiSchema)