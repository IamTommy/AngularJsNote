import { Injectable } from '@angular/core';
import { User } from  '../class/userClass'
import { LogService } from  '../services/logService'

@Injectable()
export class UserService {

  private logService:LogService;
  constructor(
    logService:LogService
  ) {
    this.logService = logService;
  }

  userList:any = [];

  defaultUser = new User(1, 'tommy', 'it', 18);
  creatUser(user:User) {
    this.userList.push(user);
  }

  getUserList() {
    this.logService.createLog('get userlist',' empty ');
    return this.userList;
  }
}
