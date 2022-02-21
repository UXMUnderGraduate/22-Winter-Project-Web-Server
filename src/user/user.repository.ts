import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInUserDto } from './dto/signin-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async existsByEmail(email: string) {
    try {
      const result = await this.userModel.exists({ email });
      return result;
    } catch (e) {
      throw new HttpException('DB error', 400);
    }
  }

  async existsByMetamaskId(metamaskId: string) {
    try {
      const result = await this.userModel.exists({ metamaskId });
      return result;
    } catch (e) {
      throw new HttpException('DB error', 400);
    }
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findUserByIdWithoutPassword(id: string) {
    return await this.userModel.findById(id).select('-password');
  }
}
