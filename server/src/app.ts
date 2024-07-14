import express from "express";

import { container } from "./container";
import { InversifyExpressServer } from "inversify-express-utils";

import { PORT } from "./utils/constants";

export class App {
  async setup() {
    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
      app.use(express.json());
    });

    const app = server.build();

    app.listen(PORT, () => {
      console.log(`server is connected on ${PORT}`);
    });
  }
}
