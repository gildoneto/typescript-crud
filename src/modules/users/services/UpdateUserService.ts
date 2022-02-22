import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import UsersRepository from '../repositories/UsersRepository'
import { hash, compare } from 'bcryptjs'
import AppError from '../../../shared/errors/AppError'

interface IRequestDTO {
  user_id: string
  newPassword: string
  prevPassword: string
}

class UpdateUserService {
  private usersRepository = getCustomRepository(UsersRepository)

  public async execute({
    newPassword,
    prevPassword,
    user_id
  }: IRequestDTO): Promise<User> {
    const userExists = await this.usersRepository.findById(user_id)

    if(!userExists) {
      throw new AppError('Usuário não existe no banco!')
    }

    const isPasswordValid = await compare(prevPassword, userExists.password)

    if(!isPasswordValid) {
      throw new AppError('A senha anterior está incorreta!')
    }

    const hashedNewPassword = await hash(newPassword, 8)
    userExists.password = hashedNewPassword

    const user = await this.usersRepository.save(userExists)

    return user
  }
}

export { UpdateUserService }
