import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop({
    unique: true,
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  password: string;

  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty()
  metamaskid: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  nickname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
