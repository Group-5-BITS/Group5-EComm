import { Context } from "./Context";
import { onSearchPostRequestMessage } from "./onSearchPostRequestMessage";

export class onSearchResponse {
  context: Context;
  message: onSearchPostRequestMessage;
}
