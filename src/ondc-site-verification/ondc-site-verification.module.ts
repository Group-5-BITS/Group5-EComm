import { Module } from '@nestjs/common';
import { OndcSiteVerificationService } from './ondc-site-verification.service';
import { OndcSiteVerificationController } from './ondc-site-verification.controller';

@Module({
  controllers: [OndcSiteVerificationController],
  providers: [OndcSiteVerificationService]
})
export class OndcSiteVerificationModule {}
