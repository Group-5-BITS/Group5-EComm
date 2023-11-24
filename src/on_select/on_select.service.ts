import { Injectable } from "@nestjs/common";
import { UpdateOnSelectDto } from "./dto/update-on_select.dto";
import { databaseUtils } from "../utils/database/databaseUtils";
import { onSelectResponse } from "../schemas/selectResponse";

@Injectable()
export class OnSelectService {
  async create(selectResponse: onSelectResponse) {

    let mongoClient = databaseUtils.mongoClient
      ? databaseUtils.mongoClient
      : await databaseUtils.connectToCluster(process.env.URI);
    const collection = mongoClient.db("Beckn").collection("bap_client");

    console.log(selectResponse.message.order);
    console.log(selectResponse.message.order?.items);

    const insertDocument = {
      messageId: selectResponse.context.message_id,
      timestamp: selectResponse.context.timestamp,
      order: selectResponse.message?.order,
      type: "Quotation"
    };

    await collection.insertOne(insertDocument);
    return insertDocument;
  }

  async findOne(id: string) {
    const agg = [
      {
        "$match": {
          "messageId": id
        }
      }, {
        "$project": {
          "_id": "$messageId",
          "order": "$order"
        }
      }
    ];

    let mongoClient = databaseUtils.mongoClient || await databaseUtils.connectToCluster(process.env.URI);
    const collection = mongoClient.db("Beckn").collection("bap_client");
    const cursor = collection.aggregate(agg);
    return cursor.toArray();
  }

  update(id: number, updateOnSelectDto: UpdateOnSelectDto) {
    return `This action updates a #${id} onSelect`;
  }

  remove(id: number) {
    return `This action removes a #${id} onSelect`;
  }
}
