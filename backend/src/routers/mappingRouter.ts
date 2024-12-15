import express, { Request, Response, NextFunction } from 'express'
import { MappingModel } from '../models/mappingProfile'

export const mappingRouter = express.Router()

const getMappingProfilesByApis = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parameters = req.body.apis
    if (parameters && parameters instanceof Array) {
      const data = await MappingModel.find({ 'apiId': { $in: parameters } })
      res.json(data)
      return
    }
  } catch (error) {
    next(error)
  }
  res.status(400).json({ message: 'apis required in body' })
  return
}

const getAllMappingProfiles = async (_: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await MappingModel.find({}))
  } catch (error) {
    next(error)
  }
  return
}

mappingRouter.get('/', async (req, res, next) => getAllMappingProfiles(req, res, next))
mappingRouter.post('/byapis', async (req, res, next) => getMappingProfilesByApis(req, res, next))