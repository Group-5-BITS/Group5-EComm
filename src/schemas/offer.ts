/**
 * Beckn Core API
 * Beckn Core API specification
 *
 * The version of the OpenAPI document: 0.9.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Descriptor } from "./Descriptor";
import { Time } from "./Time";


/**
 * Describes an offer
 */
export class Offer {
  id?: string;
  descriptor?: Descriptor;
  location_ids?: string[];
  category_ids?: string[];
  item_ids?: string[];
  time?: Time;
}

