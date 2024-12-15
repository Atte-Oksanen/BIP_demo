import express, { Request, Response, NextFunction } from 'express'
import { ApiModel } from '../models/api'

export const apiRouter = express.Router()

const getAllApis = async (_: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await ApiModel.find({}))
  } catch (error) {
    next(error)
  }
}

apiRouter.get('/', async (req, res, next) => getAllApis(req, res, next))