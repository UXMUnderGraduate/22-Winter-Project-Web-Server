import { PickType } from '@nestjs/mapped-types';
import { User } from '../schemas/user.schema';

export class SignInUserDto extends PickType(User, [
  'email',
  'password',
  'metamaskId',
]) {}
