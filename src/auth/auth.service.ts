import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtSignInDto } from './dto/jwt-signin.dto';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  JwtSignIn(data: JwtSignInDto) {
    const { email, metamaskId, id } = data;
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
