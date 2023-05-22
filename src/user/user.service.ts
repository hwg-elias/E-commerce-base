import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const findUser = await this.findUser(createUserDTO.username);
    if (findUser) {
      throw new HttpException(
        'Username already exists',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    createUserDTO.password = await bcrypt.hash(createUserDTO.password, 10);
    const newUser = await this.userModel.create(createUserDTO);
    newUser.password = undefined;
    return newUser;
  }

  async findUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }
}
