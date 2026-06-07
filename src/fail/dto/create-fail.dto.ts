import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateFailDto {
  @IsInt()
  @Min(1)
  user_id!: number;

  @IsString()
  @IsNotEmpty()
  content!: string;
}
