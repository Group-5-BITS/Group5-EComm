import { Body, Controller, Post } from "@nestjs/common";
import { GetCatalogService } from "./get_catalog.service";


@Controller("get-catalog")
export class GetCatalogController {
  constructor(private readonly getCatalogService: GetCatalogService) {
  }

  @Post()
  async viewProviderCatalog(@Body() requestBody) {
    try {
      return await this.getCatalogService.generateSearchRequest(requestBody);
    } catch (error) {

      return error;
    }
  }


}
