import { PartialType } from "@nestjs/swagger";
import { CreateOnSearchDto } from "./create-on_search.dto";

export class UpdateOnSearchDto extends PartialType(CreateOnSearchDto) {
}
