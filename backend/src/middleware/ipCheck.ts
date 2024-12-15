import { Request, Response, NextFunction } from 'express'


const ipCheck = (req: Request, __: Response, next: NextFunction) => {
  console.log(req.ip)
  next()
}

export default ipCheck