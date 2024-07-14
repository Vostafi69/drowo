import express from "express";
// import cors from 'cors';
import cors from "cors";

import { container } from "./container";
import { InversifyExpressServer } from "inversify-express-utils";

import { PORT } from "./utils/constants";

export class App {
  async setup() {
    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
      app.use(express.json());
      app.use(cors());
    });

    const app = server.build();

    app.listen(PORT, () => {
      console.log(`server is connected on ${PORT}`);
    });
  }
}
