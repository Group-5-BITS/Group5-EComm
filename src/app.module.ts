import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GetCatalogModule } from "./get_catalog/get_catalog.module";
import { OnSearchModule } from "./on_search/on_search.module";
import { OnSubscribeModule } from "./on_subscribe/on_subscribe.module";
import { ServeStaticModule } from "@nestjs/serve-static"; // New
import { join } from "path"; // New
import { OnSelectModule } from "./on_select/on_select.module";
import { SubscribeModule } from "./subscribe/subscribe.module";
import { OndcSiteVerificationModule } from "./ondc-site-verification/ondc-site-verification.module";
import { CheckoutModule } from "./checkout/checkout.module";
import { OnInitModule } from "./on_init/on_init.module";

@Module({
  imports: [GetCatalogModule, OnSearchModule, OnSubscribeModule, ServeStaticModule.forRoot({ // New
    rootPath: join(__dirname, "../../", "client/dist") // New
  }), OnSelectModule, SubscribeModule, OndcSiteVerificationModule, CheckoutModule, OnInitModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
