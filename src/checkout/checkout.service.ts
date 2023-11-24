import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { contextFactory } from "../utils/factories/contextFactory";
import axios from "axios";
import { InitDetails, OrderDetails } from "./dto/checkout.dto";

@Injectable()
export class CheckoutService {

  async getQuotation(orderDetails: OrderDetails) {

    const messageID: string = randomUUID();
    const transactionId: string = randomUUID();
    let headers = {
      "Content-Type": "application/json"
    };

    const ctx = contextFactory("std:080", "select", transactionId, messageID);

    const request = {
      context: ctx,
      message: {
        order: {
          items: orderDetails.items
        }
      }
    };

    console.log(request);
    let response = await axios.post(orderDetails.bppURI + "select", request, { headers });

    return { response: response.data, messageId: messageID, transactionId: transactionId };
  }

  async initiateCheckout(initDetails: InitDetails) {
    const bppURI = initDetails.bppURI;

    const messageID: string = randomUUID();
    const transactionId: string = initDetails.transactionId;
    let headers = {
      "Content-Type": "application/json"
    };

    const ctx = contextFactory("std:080", "init", transactionId, messageID);
    const address = {
      name: initDetails.userDetails.locality,
      street: initDetails.userDetails.street,
      locality: initDetails.userDetails.locality,
      city: initDetails.userDetails.city,
      state: initDetails.userDetails.state,
      country: initDetails.userDetails.country,
      area_code: initDetails.userDetails.pin
    };
    const billing = {
      name: `${initDetails.userDetails.firstName} ${initDetails.userDetails.lastName}`,
      address: address,
      email: initDetails.userDetails.email,
      phone: initDetails.userDetails.contact
    };

    const fulfillment = {
      type: initDetails.userDetails.type,
      tracking: true,
      end: {
        location: {
          address: address
        },
        contact: {
          email: initDetails.userDetails.email,
          phone: initDetails.userDetails.contact
        }

      }
    };

    const message = {
      order: {
        items: initDetails.items,
        billing: billing,
        fulfillment: fulfillment
      }
    };

    const request = {
      context: ctx,
      message: message
    };

    console.log(request);

    let response = await axios.post(initDetails.bppURI + "init", request, { headers });

    return { response: response.data, messageId: messageID };
  }
}
