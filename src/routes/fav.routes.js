import { Router } from 'express'
import {
  createFavHandler,
  findFavsHandler
} from '../controller/fav.controller.js'
import deserializeUser from '../middleware/deserializeUser.js'

const favRouter = Router()

favRouter.post('/api/fav',deserializeUser, createFavHandler)

favRouter.get(
  '/api/fav',
  deserializeUser,
  findFavsHandler
)

export default favRouter
