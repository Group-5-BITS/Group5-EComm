import { Module } from '@nestjs/common';
import { OnSubscribeService } from './on_subscribe.service';
import { OnSubscribeController } from './on_subscribe.controller';

@Module({
  controllers: [OnSubscribeController],
  providers: [OnSubscribeService]
})
export class OnSubscribeModule {}
