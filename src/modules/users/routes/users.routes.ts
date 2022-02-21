import { instanceToInstance } from 'class-transformer'
import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const usersRouter = Router()

usersRouter.post('/users', async(request, response) =>{
  const { email, password } = request.body

  const createUser = new CreateUserService()

  const user = await createUser.execute({ email, password })

  return response.status(201).json(instanceToInstance(user))
})

export default usersRouter
