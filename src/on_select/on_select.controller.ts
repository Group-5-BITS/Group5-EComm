import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OnSelectService } from "./on_select.service";
import { UpdateOnSelectDto } from "./dto/update-on_select.dto";
import { onSelectResponse } from "../schemas/selectResponse";

@Controller("on_select")
export class OnSelectController {
  constructor(private readonly onSelectService: OnSelectService) {
  }

  @Post()
  async create(@Body() selectResponse: onSelectResponse) {
    return await this.onSelectService.create(selectResponse);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.onSelectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnSelectDto: UpdateOnSelectDto) {
    return this.onSelectService.update(+id, updateOnSelectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onSelectService.remove(+id);
  }
}
