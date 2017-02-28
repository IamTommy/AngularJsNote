/**
 * Created by Administrator on 2017/2/28.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {
  constructor(userName:string) {
    if(userName) {
      console.log(userName);
    }
  }
}
