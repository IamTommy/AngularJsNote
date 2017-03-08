import { Component } from '@angular/core';
import {User} from "../class/userClass";
import {UserService} from "../services/userService";
import { FactoryService } from "../services/factoryService";
import { factoryServiceProvider } from "../provider/factory.provider";


@Component({
	selector: 'my-ioc',
  templateUrl:'./html/IOC.html',
  providers:[factoryServiceProvider]
})

export class TestIOC {
  private _userService:UserService;

  curUser = {};
  constructor(
    userService:UserService,
    factoryService:FactoryService
  ) {
    this._userService = userService;
  }

  get userList() {
    return this._userService.getUserList();
  }

  restUserInfo() {
    this.curUser = {};
  }

  saveUser(user:User) {
    if(!user.id)
      user.id = this.userList.length + 1;
    this._userService.creatUser(user);
    this.restUserInfo();
  }
}
