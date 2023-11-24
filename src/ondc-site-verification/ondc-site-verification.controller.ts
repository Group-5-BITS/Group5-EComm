import { Controller } from '@nestjs/common';
import { OndcSiteVerificationService } from './ondc-site-verification.service';

@Controller('ondc-site-verification')
export class OndcSiteVerificationController {
  constructor(private readonly ondcSiteVerificationService: OndcSiteVerificationService) {}
}
