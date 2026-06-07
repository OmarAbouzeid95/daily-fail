import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReactionDto {
  @IsInt()
  @Min(1)
  user_id!: number;

  @IsInt()
  @Min(1)
  fail_id!: number;

  @IsString()
  @IsNotEmpty()
  type!: string;
}
