import { Router } from 'express'
import {
    loginHandler
} from '../controller/login.controller.js'

const loginRouter = Router()

loginRouter.post('/auth/local/login', loginHandler)


export default loginRouter