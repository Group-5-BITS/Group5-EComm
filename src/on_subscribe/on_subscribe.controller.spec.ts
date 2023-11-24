import { Test, TestingModule } from '@nestjs/testing';
import { OnSubscribeController } from './on_subscribe.controller';
import { OnSubscribeService } from './on_subscribe.service';

describe('OnSubscribeController', () => {
  let controller: OnSubscribeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnSubscribeController],
      providers: [OnSubscribeService],
    }).compile();

    controller = module.get<OnSubscribeController>(OnSubscribeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
