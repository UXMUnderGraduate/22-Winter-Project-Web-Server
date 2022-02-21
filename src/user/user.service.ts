import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { SignInUserDto } from './dto/signin-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}
  async signUp(createUserDto: CreateUserDto) {
    const { email, password, nickname, metamaskId } = createUserDto;
    const isUserExist = await this.userRepository.existsByEmail(email);
    if (isUserExist) {
      throw new UnauthorizedException('해당 이메일은 이미 가입되어있습니다.');
    }
    const isMetamaskExist = await this.userRepository.existsByMetamaskId(
      metamaskId,
    );

    if (isMetamaskExist) {
      throw new UnauthorizedException(
        '해당 메타마스크 아이디는 이미 가입되어있습니다.',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: User = await this.userRepository.create({
      email,
      password: hashedPassword,
      nickname,
      metamaskId,
    });

    return user.readOnlyData;
  }

  async signIn(signInUserDto: SignInUserDto) {
    const { email, password, metamaskId } = signInUserDto;
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const isMetamaskIdValidated: boolean = metamaskId === user.metamaskId;

    if (!isMetamaskIdValidated) {
      throw new UnauthorizedException('메타마스크 아이디가 일치하지 않습니다.');
    }

    return {
      token: this.authService.JwtSignIn({ id: user.id, email, metamaskId }),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  findMetamaskOne(id: string) {
    return `This action returns a metamask #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
