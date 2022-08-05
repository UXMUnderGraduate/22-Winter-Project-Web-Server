import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInUserDto } from './dto/signin-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator.ts';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.signUp(createUserDto);
  }

  @Post('signin')
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.userService.signIn(signInUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('current')
  getCurrentUser(@CurrentUser() user) {
    return user.readOnlyData;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Get('/metamask/:id')
  findMetamaskOne(@Param('id') id: string) {
    return this.userService.findMetamaskOne(id);
  }

  @Get('/email/:address')
  findOneByEmail(@Param('address') emailAddress: string) {
    return this.userService.findOneByEmail(emailAddress);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
