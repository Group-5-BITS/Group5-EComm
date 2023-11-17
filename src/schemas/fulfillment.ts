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
import { FulfillmentCustomer } from "./fulfillmentCustomer";
import { Vehicle } from "./vehicle";
import { Agent } from "./agent";
import { FulfillmentDetails } from "./fulfillmentDetails";
import { State } from "./state";

import { Person } from "./person";
import { Contact } from "./contact";


/**
 * Describes how a single product/service will be rendered/fulfilled to the end customer
 */
export class Fulfillment {
  /**
   * Unique reference ID to the fulfillment of an order
   */
  private _id?: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  /**
   * This describes the type of fulfillment
   */
  private _type?: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _provider_id?: string;

  get provider_id(): string {
    return this._provider_id;
  }

  set provider_id(value: string) {
    this._provider_id = value;
  }

  private _rating?: number;

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  private _state?: State;

  get state(): State {
    return this._state;
  }

  set state(value: State) {
    this._state = value;
  }

  /**
   * Indicates whether the fulfillment allows tracking
   */
  private _tracking?: boolean;

  get tracking(): boolean {
    return this._tracking;
  }

  set tracking(value: boolean) {
    this._tracking = value;
  }

  private _customer?: FulfillmentCustomer;

  get customer(): FulfillmentCustomer {
    return this._customer;
  }

  set customer(value: FulfillmentCustomer) {
    this._customer = value;
  }

  private _agent?: Agent;

  get agent(): Agent {
    return this._agent;
  }

  set agent(value: Agent) {
    this._agent = value;
  }

  private _person?: Person;

  get person(): Person {
    return this._person;
  }

  set person(value: Person) {
    this._person = value;
  }

  private _contact?: Contact;

  get contact(): Contact {
    return this._contact;
  }

  set contact(value: Contact) {
    this._contact = value;
  }

  private _vehicle?: Vehicle;

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  set vehicle(value: Vehicle) {
    this._vehicle = value;
  }

  private _start?: FulfillmentDetails;

  get start(): FulfillmentDetails {
    return this._start;
  }

  set start(value: FulfillmentDetails) {
    this._start = value;
  }

  private _end?: FulfillmentDetails;

  get end(): FulfillmentDetails {
    return this._end;
  }

  set end(value: FulfillmentDetails) {
    this._end = value;
  }

  /**
   * If the entity can be rated or not
   */
  private _rateable?: boolean;

  get rateable(): boolean {
    return this._rateable;
  }

  set rateable(value: boolean) {
    this._rateable = value;
  }

  /**
   * Describes a tag. This is a simple key-value store which is used to contain extended metadata
   */
  private _tags?: { [key: string]: string; };

  get tags(): { [p: string]: string } {
    return this._tags;
  }

  set tags(value: { [p: string]: string }) {
    this._tags = value;
  }
}

