import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getUsers(): { data: string; response: string } {
    return {
      data: "sucess",
      response: "200",
    };
  }
}
