import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'
import { DeleteUserService } from '../services/DeleteUserService'

class UsersController {

  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({ email, password })

    return response.status(201).json(instanceToInstance(user))
  }

  /*
   request params: users/:id
   body: { json }
   query params: users?id=1
  */
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params //users/:id

    const deleteUser = new DeleteUserService()

    await deleteUser.execute({ user_id: id })

    return response.status(200).json({ ok: true })
  }
}

export { UsersController }
