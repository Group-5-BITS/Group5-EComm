import { ApiProperty } from "@nestjs/swagger";

const dayjs = require("dayjs");

// let duration = require('dayjs/plugin/duration');
export class Context {
  private _domain: string;

  get domain(): string {
    return this._domain;
  }

  set domain(value: string) {
    this._domain = value;
  }

  // @ApiProperty({
  //   enum: [
  //     'search',
  //     'select',
  //     'init',
  //     'confirm',
  //     'update',
  //     'status',
  //     'track',
  //     'cancel',
  //     'rating',
  //     'support',
  //     'on_search',
  //     'on_select',
  //     'on_init',
  //     'on_confirm',
  //     'on_update',
  //     'on_status',
  //     'on_track',
  //     'on_cancel',
  //     'on_rating',
  //     'on_support',
  //   ],
  // })

  @ApiProperty() private _country: string;

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  @ApiProperty() private _city: string;

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  @ApiProperty() private _action: string;

  get action(): string {
    return this._action;
  }

  set action(value: string) {
    this._action = value;
  }

  private _core_version: string;

  get core_version(): string {
    return this._core_version;
  }

  set core_version(value: string) {
    this._core_version = value;
  }

  @ApiProperty({ format: "uri" }) private _bap_id: string;

  get bap_id(): string {
    return this._bap_id;
  }

  set bap_id(value: string) {
    this._bap_id = value;
  }

  private _bap_uri: string;

  get bap_uri(): string {
    return this._bap_uri;
  }

  set bap_uri(value: string) {
    this._bap_uri = value;
  }

  private _bpp_id?: string;

  get bpp_id(): string {
    return this._bpp_id;
  }

  set bpp_id(value: string) {
    this._bpp_id = value;
  }

  private _bpp_uri?: string;

  get bpp_uri(): string {
    return this._bpp_uri;
  }

  set bpp_uri(value: string) {
    this._bpp_uri = value;
  }

  private _transaction_id: string;

  get transaction_id(): string {
    return this._transaction_id;
  }

  set transaction_id(value: string) {
    this._transaction_id = value;
  }

  private _message_id: string;

  get message_id(): string {
    return this._message_id;
  }

  set message_id(value: string) {
    this._message_id = value;
  }

  private _timestamp: string;

  get timestamp(): string {
    return this._timestamp;
  }

  set timestamp(value: string) {
    this._timestamp = value;
  }

  private _key?: string;

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  private _ttl?: string;

  get ttl(): string {
    return this._ttl;
  }

  set ttl(value: string) {
    this._ttl = value;
  }

  // constructor(city: string, action: string, transaction_id: string, messageID: string) {
  //   // dayjs.extend(duration);
  //   const envVariables = process.env;
  //   const date: Date = new Date();
  //
  //   this.domain = envVariables.DOMAIN;
  //   this.city = city;
  //   this.action = action;
  //   this._transaction_id = transaction_id;
  //   this.message_id = messageID;
  //   this.action = envVariables.ACTION;
  //   this.core_version = envVariables.CORE_VERSION;
  //   this.bap_id = envVariables.BAP_ID;
  //   this.bap_uri = envVariables.BAP_URI;
  //   this.timestamp = date.toISOString()
  //   this.ttl = dayjs.duration(1, 'h').toISOString();
  //
  // }
}
