import { Exclude } from 'class-transformer'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column, CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User
