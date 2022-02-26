import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/user/schemas/user.schema';

export class JwtSignInDto extends PickType(User, [
  'id',
  'email',
  'metamaskId',
]) {}
