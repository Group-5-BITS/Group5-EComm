import { Body, Controller, Post } from "@nestjs/common";
import { CheckoutService } from "./checkout.service";
import { InitDetails, OrderDetails } from "./dto/checkout.dto";

@Controller("checkout")
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {
  }

  @Post("/getQuotation")
  async getQuotation(@Body() orderDetails: OrderDetails) {
    try {
      return await this.checkoutService.getQuotation(orderDetails);
    } catch (error) {
      return error;
    }
  }

  @Post("/initiateCheckout")
  async initiateCheckout(@Body() initDetails: InitDetails) {
    try {
      return await this.checkoutService.initiateCheckout(initDetails);
    } catch (error) {
      return error;
    }
  }
}
