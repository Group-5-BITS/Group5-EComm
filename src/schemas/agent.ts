/**
 * Describes an order executor
 */
export class Agent {
  /**
   * Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}
   */
  name?: string;
  /**
   * Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```
   */
  image?: string;
  dob?: string;
  /**
   * Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender
   */
  gender?: string;
  cred?: string;
  /**
   * Describes a tag. This is a simple key-value store which is used to contain extended metadata
   */
  tags?: { [key: string]: string; };
  phone?: string;
  email?: string;
  /**
   * If the entity can be rated or not
   */
  rateable?: boolean;
}

