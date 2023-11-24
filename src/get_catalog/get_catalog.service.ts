import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { contextFactory } from "../utils/factories/contextFactory";
import axios from "axios";

@Injectable()
export class GetCatalogService {
  async generateSearchRequest(requestBody) {
    console.log("name", requestBody.name);
    const gps = "13.1989444,77.704";
    console.log("test");

    // const auth = new authentication(); //Auth is not working with beckn gateway
    const messageID: string = randomUUID();
    const transactionID: string = randomUUID();

    const ctx = contextFactory("std:080", "search", transactionID, messageID);


    const intent = {
      fulfillment: {
        end: {
          location: {
            gps: gps
          }
        }
      }
    };

    if (requestBody.name) {
      intent["item"] = {
        descriptor: {
          name: requestBody.name
        }
      };
    }

    if (requestBody.minimum_value) {
      intent["item"] = {
        price: {
          minimum_value: requestBody.minimum_value,
          maximum_value: requestBody.maximum_value
        }
      };
    }

    if (requestBody.provider_name) {
      intent["provider"] = {
        descriptor: {
          name: requestBody.provider_name
        }
      };
    }


    let message = { intent: intent };

    const request = { context: ctx, message };
    // const authHeader = await auth.createAuthorizationHeader(request);
    let header = {
      "Content-Type": "application/json"
      // 'Authorization': authHeader[0]
    };
    // let subs = {
    //   subscriber_id: process.env.BAP_ID,
    //   subscriber_url: process.env.BAP_URI,
    //   type: 'BAP',
    //   signing_public_key: process.env.SIGNING_PUBLIC_KEY,
    //   valid_until: authHeader[1],
    // };
    // const verify = await auth.verifyHeader(authHeader[0], subs, request);
    // console.log(authHeader);

    // try {
    //   let response2 = await axios.post("https://bpp.testing.tvast.in/search", request, { headers: header })
    //   console.log(response2.data)
    // }
    // catch (e) {
    //   console.log(e)
    //
    // }
    let searchUri = process.env.GATEWAY_URI ?? process.env.BPP_URI;
    let response = await axios.post(searchUri + "search", request, { headers: header });


    return { response: response.data, message_id: messageID };

  }


}
