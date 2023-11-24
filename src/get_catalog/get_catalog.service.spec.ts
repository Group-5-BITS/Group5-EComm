import { Test, TestingModule } from "@nestjs/testing";
import { GetCatalogService } from "./get_catalog.service";

describe("GetCatalogService", () => {
  let service: GetCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCatalogService]
    }).compile();

    service = module.get<GetCatalogService>(GetCatalogService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
