import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AppInterceptor } from "src/app.interceptor";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseInterceptors(AppInterceptor)
  getUsers(): any {
    return this.usersService.getUsers();
  }
}
