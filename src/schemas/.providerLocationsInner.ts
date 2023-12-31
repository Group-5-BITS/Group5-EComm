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
import { Circle } from "./circle";
import { Address } from "./address";
import { Country } from "./country";
import { Descriptor } from "./descriptor";
import { Time } from "./time";
import { City } from "./city";


export class ProviderLocationsInner {
  id?: string;
  descriptor?: Descriptor;
  /**
   * Describes a gps coordinate
   */
  gps?: string;
  address?: Address;
  station_code?: string;
  city?: City;
  country?: Country;
  circle?: Circle;
  polygon?: string;
  _3dspace?: string;
  time?: Time;
  /**
   * If the entity can be rated or not
   */
  rateable?: boolean;
}

