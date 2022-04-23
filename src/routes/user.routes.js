import { Router } from 'express'
import {
  createUserHandler,
  findUsersHandler
} from '../controller/user.controller.js'
import deserializeUser from '../middleware/deserializeUser.js'

const userRouter = Router()

userRouter.post('/api/user', createUserHandler)

userRouter.get(
  '/api/user',
  deserializeUser,
  findUsersHandler
)

export default userRouter
