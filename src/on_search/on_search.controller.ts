import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OnSearchService } from "./on_search.service";
import { UpdateOnSearchDto } from "./dto/update-on_search.dto";
import { onSearchResponse } from "../schemas/searchResponse";

@Controller("on_search")
export class OnSearchController {
  constructor(private readonly onSearchService: OnSearchService) {
  }

  @Post()
  async create(@Body() searchResponse: onSearchResponse) {
    return this.onSearchService.create(searchResponse);
  }

  @Get()
  async findAll() {
    return await this.onSearchService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.onSearchService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOnSearchDto: UpdateOnSearchDto) {
    return this.onSearchService.update(+id, updateOnSearchDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.onSearchService.remove(+id);
  }
}
