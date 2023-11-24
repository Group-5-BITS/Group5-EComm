import { Injectable } from "@nestjs/common";
import { UpdateOnSearchDto } from "./dto/update-on_search.dto";
import { onSearchResponse } from "../schemas/searchResponse";
import { databaseUtils } from "../utils/database/databaseUtils";

const fs = require('fs/promises');

@Injectable()
export class OnSearchService {
  async create(searchResponse: onSearchResponse) {
    // await fs.writeFile('../log.txt', JSON.stringify(searchResponse.message, null, 10), { flag: 'a+' });


    let mongoClient = databaseUtils.mongoClient
      ? databaseUtils.mongoClient
      : await databaseUtils.connectToCluster(process.env.URI);
    const collection = mongoClient.db("Beckn").collection("bap_client");
    console.log(searchResponse.context.bpp_id)
    try {
      searchResponse.message.catalog.bpp_descriptor =
        searchResponse.message.catalog["bpp/descriptor"];
      searchResponse.message.catalog.bpp_providers =
        searchResponse.message.catalog["bpp/providers"];
    }
    catch (e) {
      console.log(searchResponse)
      console.log(e)
    }
    let items: Array<any> = [];
    searchResponse.message?.catalog?.bpp_providers.forEach((provider): any => {
      let item;
      provider.items.forEach((value, index): any => {
        item = {
          provider_id: searchResponse.context.bpp_id,
          images: value.descriptor.images,
          short_desc: value.descriptor.short_desc,
          long_desc: value.descriptor.long_desc,
          categories: provider?.categories,
          category: provider?.categories?.find((category) => {
            return category?.id === value?.category_id;
          })?.descriptor.name,
          provider_name: provider.descriptor.name,
          provider_location: provider.locations[0]?.gps,
          name: value.descriptor.name,
          id: value.id,
          price: value.price
        };
        items = [...items, item];
      });
    });
    const insertDocument = {
      messageId: searchResponse.context.message_id,
      timestamp: searchResponse.context.timestamp,
      catalog: {
        items
      }
    };

    await collection.insertOne(insertDocument);
    return insertDocument;
  }

  async findAll() {
    return `This action returns all onSearch`;
  }

  async findOne(id: string) {
    const agg = [
      {
        $match: {
          messageId: `${id}`
        }
      },
      {
        $group: {
          _id: "$messageId",
          catalog: {
            $addToSet: "$catalog.items"
          }
        }
      },
      {
        $addFields: {
          catalog: {
            $reduce: {
              input: "$catalog",
              initialValue: [],
              in: {
                $concatArrays: ["$$this", "$$value"]
              }
            }
          }
        }
      }
    ];

    let mongoClient = databaseUtils.mongoClient
      ? databaseUtils.mongoClient
      : await databaseUtils.connectToCluster(process.env.URI);
    const collection = mongoClient.db("Beckn").collection("bap_client");

    const cursor = collection.aggregate(agg);
    return await cursor.toArray();
  }

  update(id: number, updateOnSearchDto: UpdateOnSearchDto) {
    return `This action updates a #${id} onSearch`;
  }

  remove(id: number) {
    return `This action removes a #${id} onSearch`;
  }
}
