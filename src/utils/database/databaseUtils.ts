import { MongoClient } from "mongodb";

export class databaseUtils {
  static mongoClient: MongoClient;


  static async connectToCluster(uri) {

    try {
      this.mongoClient = new MongoClient(uri);
      console.log("Connecting to MongoDB Atlas cluster...");
      await this.mongoClient.connect();
      console.log("Successfully connected to MongoDB Atlas!");

      return this.mongoClient;
    } catch (error) {
      console.error("Connection to MongoDB Atlas failed!", error);
      process.exit();
    }
  }
}
