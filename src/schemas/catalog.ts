import { Fulfillment } from "./fulfillment";
import { Payment } from "./payment";
import { Category } from "./category";
import { Offer } from "./offer";
import { Descriptor } from "./Descriptor";
import { Provider } from "./provider";


/**
 * Describes a BPP catalog
 */
export class Catalog {
  bpp_descriptor?: Descriptor;
  bpp_categories?: Array<Category>;
  bpp_fulfillments?: Array<Fulfillment>;
  bpp_payments?: Array<Payment>;
  bpp_offers?: Array<Offer>;
  bpp_providers?: Array<Provider>;
  /**
   * Time after which catalog has to be refreshed
   */
  exp?: string;
}

