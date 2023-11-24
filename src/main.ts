import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as fs from 'fs';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  require("dotenv").config();

  const httpsOptions = {
    key: fs.readFileSync('./secrets/server.key'),
    cert: fs.readFileSync('./secrets/server.crt'),
  };

  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.enableCors(); // todo remove this in production

  const config = new DocumentBuilder()
    .setTitle("Beckn App Platform")
    .setDescription("Beckn Protocol")
    .setVersion("1.0")
    .addTag("Beckn")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("openapi", app, document);

  app.setGlobalPrefix("api");

  await app.listen(5173);
}

bootstrap();
