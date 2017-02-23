import { Injectable } from '@angular/core';
import { User } from  '../class/userClass'


@Injectable()
export class UserService {
  
  	userList = [];

  	defaultUser = new User(1,'tommy','it','18');
  	userList.push(defaultUser);

	creatUser(User:user) {
		this.userList.push(user);
	}

	getUserList() {
		return this.userList;
	}

}