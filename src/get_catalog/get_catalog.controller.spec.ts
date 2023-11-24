import { Test, TestingModule } from "@nestjs/testing";
import { GetCatalogController } from "./get_catalog.controller";
import { GetCatalogService } from "./get_catalog.service";

describe("GetCatalogController", () => {
  let controller: GetCatalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCatalogController],
      providers: [GetCatalogService]
    }).compile();

    controller = module.get<GetCatalogController>(GetCatalogController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
