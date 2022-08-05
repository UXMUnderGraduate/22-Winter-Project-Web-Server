import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInUserDto } from '../user/dto/signin-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly userService: UserService) {}

  public async signIn(signInUserDto: SignInUserDto) {
    const id: number = await this.userService.signIn(signInUserDto);

    const { email, metamaskId }: SignInUserDto = signInUserDto;

    return {
      token: this.JwtSignIn(id, email, metamaskId),
    };
  }

  public async signUp(createUserDto: CreateUserDto) {
    return this.userService.signUp(createUserDto);
  }

  private JwtSignIn(id: number, email: string, metamaskId: string): string {
    const payload = {
      email,
      metamaskId,
      sub: id,
    };
    return this.jwtService.sign(payload, {
      secret: process.env.AUTH_JWT_SECRET_KEY,
    });
  }
}
