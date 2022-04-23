import { Router } from 'express'
import {
  createListHandler,
  findListsHandler,
  findListByIdHandler,
  deleteListByIdHandler,
  updateFavsOfListByIdHandler
} from '../controller/list.controller.js'
import deserializeUser from '../middleware/deserializeUser.js'

const listRouter = Router()

listRouter.post('/api/list', deserializeUser, createListHandler)

listRouter.get(
  '/api/list',
  deserializeUser,
  findListsHandler
)
listRouter.get(
  '/api/list/:id',
  deserializeUser,
  findListByIdHandler
)
listRouter.delete(
  '/api/list/:id',
  deserializeUser,
  deleteListByIdHandler
)
listRouter.put(
  '/api/list/:id',
  deserializeUser,
  updateFavsOfListByIdHandler
)

export default listRouter
