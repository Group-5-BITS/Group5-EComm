import { Module } from "@nestjs/common";
import { GetCatalogService } from "./get_catalog.service";
import { GetCatalogController } from "./get_catalog.controller";

@Module({
  controllers: [GetCatalogController],
  providers: [GetCatalogService]
})
export class GetCatalogModule {
}
