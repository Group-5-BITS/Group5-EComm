import { Injectable } from '@nestjs/common';

@Injectable()
export class OnSubscribeService {

  async decrypt(challengeString: string){
    let date = new Date()
    console.log(date.toISOString())
    // console.log(challengeString);
  }
}

