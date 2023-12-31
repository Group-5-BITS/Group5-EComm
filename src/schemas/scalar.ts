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
import { ScalarRange } from "./scalarRange";


/**
 * An object representing a scalar quantity.
 */
export class Scalar {
  type?: string[] = ["CONSTANT", "VARIABLE"];
  value: number;
  estimated_value?: number;
  computed_value?: number;

  range?: ScalarRange;
  unit: string;
}



