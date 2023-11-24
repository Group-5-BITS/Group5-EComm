import { Context } from "../../schemas/Context";

let duration = require("dayjs/plugin/duration");
const dayjs = require("dayjs");

export function contextFactory(city: string, action: string, transID: string, messageID: string) {
  const envVariables = process.env;
  const date: Date = new Date();

  let ctx = new Context();
  dayjs.extend(duration);
  ctx.domain = envVariables.DOMAIN;
  ctx.city = city;
  ctx.country = "IND";
  ctx.action = action;
  ctx.transaction_id = transID;
  ctx.message_id = messageID;
  ctx.core_version = envVariables.CORE_VERSION;
  ctx.bap_id = envVariables.BAP_ID;
  ctx.bap_uri = envVariables.BAP_URI;
  // ctx.bpp_id=envVariables.BPP_ID;
  // ctx.bpp_uri=envVariables.BPP_URI;
  ctx.timestamp = date.toISOString();
  // ctx.ttl = dayjs.duration(1, 'M').toISOString(); Somehow using this stops gateway from returning the search results
  let re = /_(\w+)+"/g;
  return JSON.parse(JSON.stringify(ctx).replace(re, "$1\""));
}
