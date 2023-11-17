import { Descriptor } from "./Descriptor";
import { ApiProperty } from "@nestjs/swagger";


/**
 * Describes a state
 */
export class State {
  descriptor?: Descriptor;

  @ApiProperty({ format: "date-time" })
  updated_at?: string;
  /**
   * ID of entity which changed the state
   */
  updated_by?: string;
}

