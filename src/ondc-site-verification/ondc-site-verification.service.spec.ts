import { Test, TestingModule } from '@nestjs/testing';
import { OndcSiteVerificationService } from './ondc-site-verification.service';

describe('OndcSiteVerificationService', () => {
  let service: OndcSiteVerificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OndcSiteVerificationService],
    }).compile();

    service = module.get<OndcSiteVerificationService>(OndcSiteVerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
