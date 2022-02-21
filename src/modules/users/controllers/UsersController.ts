import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'

class UsersController {

  async create(request: Request, response: Response) {
    const { email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({ email, password })

    return response.status(201).json(instanceToInstance(user))
  }
}

export { UsersController }
