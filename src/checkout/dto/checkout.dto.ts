export interface OrderDetails {
  bppURI: string;
  items: Array<object>;
}

export interface UserDetails {
  firstName: string,
  lastName: string,
  contact: number,
  email: string,
  street: string,
  locality: string,
  city: string,
  state: string,
  country: string,
  pin: number,
  type: string
}

export interface InitDetails {
  bppURI: string,
  transactionId: string,
  items: Array<object>,
  userDetails: UserDetails
}

