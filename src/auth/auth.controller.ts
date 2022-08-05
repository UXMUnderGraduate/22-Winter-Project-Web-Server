import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInUserDto } from '../user/dto/signin-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto);
  }
}
