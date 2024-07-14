import "reflect-metadata";
import { App } from "./app";

import "./controllers/user.controller";

export async function bootstrap() {
  new App().setup();
}

bootstrap();
