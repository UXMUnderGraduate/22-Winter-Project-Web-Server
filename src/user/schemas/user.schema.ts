import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

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
  metamaskId: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  nickname: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    nickname: string;
    metamaskId: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    nickname: this.nickname,
    metamaskId: this.metamaskId,
  };
});
