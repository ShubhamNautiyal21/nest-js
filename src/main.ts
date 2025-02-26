import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AppGuard } from "./app.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new AppGuard());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
