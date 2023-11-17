import { Descriptor } from "./Descriptor";
import { Fulfillment } from "./fulfillment";
import { Item } from "./item";
import { Payment } from "./payment";
import { Category } from "./category";
import { Offer } from "./offer";
import { Provider } from "./provider";


export class Intent {

  private _descriptor?: Descriptor;

  get descriptor(): Descriptor {
    return this._descriptor;
  }

  set descriptor(value: Descriptor) {
    this._descriptor = value;
  }

  private _provider?: Provider;

  get provider(): Provider {
    return this._provider;
  }

  set provider(value: Provider) {
    this._provider = value;
  }

  private _fulfillment?: Fulfillment;

  get fulfillment(): Fulfillment {
    return this._fulfillment;
  }

  set fulfillment(value: Fulfillment) {
    this._fulfillment = value;
  }

  private _payment?: Payment;

  get payment(): Payment {
    return this._payment;
  }

  set payment(value: Payment) {
    this._payment = value;
  }

  private _category?: Category;

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  private _offer?: Offer;

  get offer(): Offer {
    return this._offer;
  }

  set offer(value: Offer) {
    this._offer = value;
  }

  private _item?: Item;

  get item(): Item {
    return this._item;
  }

  set item(value: Item) {
    this._item = value;
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


