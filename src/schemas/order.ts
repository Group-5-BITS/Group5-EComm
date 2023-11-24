import { Item } from "./item";
import { Quotation } from "./Quotation";
import { Offer } from "./offer";
import { AddOn } from "./addOn";


export class Order {
  items: Array<Item>;
  quote: Quotation;
  offers: Array<Offer>;
  add_ons: Array<AddOn>;
}

