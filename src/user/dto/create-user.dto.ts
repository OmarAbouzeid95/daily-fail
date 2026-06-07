import { IsOptional, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsUUID()
  token?: string;
}
