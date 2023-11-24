export class Contact {
  phone?: string;
  email?: string;
  /**
   * Describes a tag. This is a simple key-value store which is used to contain extended metadata
   */
  tags?: { [key: string]: string; };
}

