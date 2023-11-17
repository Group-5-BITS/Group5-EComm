import Util from "./utils";
import { SubscriberDetail } from "../../schemas/subscriberDetail";

export class authentication {
  privateKey: string = process.env.SIGNING_PRIVATE_KEY;
  subscriberId: string = process.env.BAP_ID;
  uniqueKey: string = process.env.UNIQUE_KEY;

  async createAuthorizationHeader(message: any) {
    const { signing_string, expires, created } = await Util.createSigningString(JSON.stringify(message));
    const signature = await Util.signMessage(signing_string, this.privateKey || "");
    const subscriber_id = this.subscriberId;
    return [`Signature keyId="${subscriber_id}|${this.uniqueKey}|ed25519",algorithm="ed25519",created="${created}",expires="${expires}",headers="(created) (expires) digest",signature="${signature}"`, expires];
  }

  async verifyHeader(header: string, subscriber_details: SubscriberDetail, body: any): Promise<boolean> {
    try {
      const parts = Util.split_auth_header(header);
      if (!parts || Object.keys(parts).length === 0) {
        throw (new Error("Header parsing failed"));
      }
      const rawBody = JSON.stringify(body);
      const public_key = subscriber_details.signing_public_key;
      const { signing_string } = await Util.createSigningString(rawBody, parts["created"], parts["expires"]);
      return await Util.verifyMessage(parts["signature"], signing_string, public_key);
    } catch (error) {
      console.log("error");
      return false;
    }
  }
}
