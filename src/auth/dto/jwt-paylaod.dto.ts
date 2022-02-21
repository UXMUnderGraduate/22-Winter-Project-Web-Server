import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/schemas/user.schema';

export class JwtPayloadDto extends PickType(User, ['email', 'metamaskId']) {
  @IsString()
  @IsNotEmpty()
  sub: string;
}
