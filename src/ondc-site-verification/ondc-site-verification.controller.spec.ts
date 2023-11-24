import { Test, TestingModule } from '@nestjs/testing';
import { OndcSiteVerificationController } from './ondc-site-verification.controller';
import { OndcSiteVerificationService } from './ondc-site-verification.service';

describe('OndcSiteVerificationController', () => {
  let controller: OndcSiteVerificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OndcSiteVerificationController],
      providers: [OndcSiteVerificationService],
    }).compile();

    controller = module.get<OndcSiteVerificationController>(OndcSiteVerificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
