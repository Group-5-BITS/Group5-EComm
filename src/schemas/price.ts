import { ApiProperty } from "@nestjs/swagger";

/**
 * Describes the price of an item. Allows for domain extension.
 */
export class Price {

  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  currency?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  value?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  estimated_value?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  computed_value?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  listed_value?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  offered_value?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  minimum_value?: string;
  /**
   * Describes a decimal value
   */
  @ApiProperty({ pattern: "[+-]?([0-9]*[.])?[0-9]+" })
  maximum_value?: string;
}

