import express, { Request, Response, NextFunction } from 'express'
import { DataRequest } from '../types/reqBodyTypes'
import { setTimeout } from 'timers/promises'
import { ApiModel } from '../models/api'
import { Api } from '../types/dbTypes'
import axios, { AxiosError } from 'axios'

export const dataRouter = express.Router()


const getDataFromApi = async (req: Request, res: Response, __: NextFunction) => {
  const requestBody: DataRequest = req.body
  const apiDetails: Api = await ApiModel.findById(requestBody.api)
  const returnData: any[] = []
  let errorCount = 0
  for (const value of requestBody.parameters) {
    await setTimeout(200, 'resolved')
    try {
      const tempData = (await axios.get(apiDetails.address + '/' + value)).data
      returnData.push(tempData)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === 404) {
          errorCount++
        } else {
          throw new Error(error.message)
        }
      }
    }
  }
  res.json({ data: returnData, errorCount: errorCount })
  return
}

dataRouter.use('/', async (req, res, next) => getDataFromApi(req, res, next))




