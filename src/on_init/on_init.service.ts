import { Injectable } from "@nestjs/common";

@Injectable()
export class OnInitService {
  async create(initResponse: any) {
    console.log(initResponse.message.order);
  }
}
