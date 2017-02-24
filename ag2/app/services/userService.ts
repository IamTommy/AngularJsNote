import { Injectable } from '@angular/core';
import { User } from  '../class/userClass'


@Injectable()
export class UserService {

  constructor() {
    
  }

  userList:any = [];

  defaultUser = new User(1, 'tommy', 'it', 18);
  creatUser(user:User) {
    this.userList.push(user);
  }

  getUserList() {
    return this.userList;
  }
}
