import { PartialType } from '@nestjs/swagger';
import { CreateOnSelectDto } from './create-on_select.dto';

export class UpdateOnSelectDto extends PartialType(CreateOnSelectDto) {}
