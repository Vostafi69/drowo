import { injectable } from "inversify";

@injectable()
export class UserService {
  constructor() {}

  sayHello() {
    return "Hello";
  }
}
