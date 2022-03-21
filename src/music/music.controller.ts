import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator.ts';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('files'))
  @Post()
  register(
    @Body() createMusicDto: CreateMusicDto,
    @CurrentUser() user,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.musicService.register(createMusicDto, user, file);
  }

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicService.update(+id, updateMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicService.remove(+id);
  }
}
