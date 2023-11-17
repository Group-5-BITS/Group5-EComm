export class Authorization {
  /**
   * Type of authorization mechanism used
   */
  type?: string;
  /**
   * Token used for authorization
   */
  token?: string;
  /**
   * Timestamp in RFC3339 format from which token is valid
   */
  valid_from?: string;
  /**
   * Timestamp in RFC3339 format until which token is valid
   */
  valid_to?: string;
  /**
   * Status of the token
   */
  status?: string;
}

