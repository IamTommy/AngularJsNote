import { Component } from '@angular/core';
import {User} from "../class/userClass";
import {UserService} from "../services/userService";

@Component({
	selector: 'my-ioc',
  templateUrl:'./html/IOC.html'
})

export class TestIOC {
  private _userService:UserService;

  curUser = {};
  constructor(userService:UserService) {
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
