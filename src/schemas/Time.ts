import { TimeRange } from "./timeRange";
import { Schedule } from "./Schedule";
import { Provider } from "./provider";

export class Time {
  label?: string;
  timestamp?: string;

  duration?: string;
  range?: TimeRange;

  days?: string;
  schedule?: Schedule;
  p?: Provider;
}

