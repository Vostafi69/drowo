import { controller, httpGet } from "inversify-express-utils";
import { UserService } from "../services/user.service";

@controller("/users")
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @httpGet("/")
  async index() {
    return this._userService.sayHello();
  }
}
