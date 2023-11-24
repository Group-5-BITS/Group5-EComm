import { Body, Controller, Post } from "@nestjs/common";
import { OnSubscribeService } from './on_subscribe.service';

@Controller('on_subscribe')
export class OnSubscribeController {
  constructor(private readonly onSubscribeService: OnSubscribeService) {}

  @Post()
  async onSubscribePost(@Body() onResponseRequest){
    return this.onSubscribeService.decrypt(onResponseRequest)
  }
}
