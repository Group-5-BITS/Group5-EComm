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


/**
 * Describes a schedule
 */
export class Schedule {
  /**
   * Describes duration as per ISO8601 format
   */
  frequency?: string;
  holidays?: Array<string>;
  times?: Array<string>;
}

