import { Body, Controller, Post } from "@nestjs/common";
import { OnInitService } from "./on_init.service";

@Controller("on_init")
export class OnInitController {
  constructor(private readonly onInitService: OnInitService) {
  }

  @Post()
  async create(@Body() initResponse: any) {
    return this.onInitService.create(initResponse);
  }

}
