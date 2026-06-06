import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FailService } from './fail.service';
import { CreateFailDto } from './dto/create-fail.dto';
import { UpdateFailDto } from './dto/update-fail.dto';

@Controller('fail')
export class FailController {
  constructor(private readonly failService: FailService) {}

  @Post()
  create(@Body() createFailDto: CreateFailDto) {
    return this.failService.create(createFailDto);
  }

  @Get()
  findAll() {
    return this.failService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.failService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFailDto: UpdateFailDto) {
    return this.failService.update(+id, updateFailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.failService.remove(+id);
  }
}
