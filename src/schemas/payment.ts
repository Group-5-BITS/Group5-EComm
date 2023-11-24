import { Time } from "./Time";
import { PaymentParams } from "./paymentParams";


/**
 * Describes a payment
 */
export class Payment {
  /**
   * A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234
   */
  uri?: string;
  tl_method?: string[] = ["http/get", "http/post"];
  params?: PaymentParams;
  type?: string[] = ["ON-ORDER", "PRE-FULFILLMENT", "ON-FULFILLMENT", "POST-FULFILLMENT"];
  status?: string[] = ["PAID", "NOT-PAID"];
  time?: Time;
}
