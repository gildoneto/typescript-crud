import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import UsersRepository from '../repositories/UsersRepository'
import AppError from '../../../shared/errors/AppError'

interface IRequestDTO {
  user_id: string
}

class ShowUserService {
  private usersRepository = getCustomRepository(UsersRepository)

  public async execute({ user_id }: IRequestDTO): Promise<User> {
    const userExists = await this.usersRepository.findById(user_id)

    if(!userExists) {
      throw new AppError('Usuário não existe no banco')
    }

    return userExists
  }
}

export { ShowUserService }
