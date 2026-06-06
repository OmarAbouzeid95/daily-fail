import { PartialType } from '@nestjs/mapped-types';
import { CreateFailDto } from './create-fail.dto';

export class UpdateFailDto extends PartialType(CreateFailDto) {}
