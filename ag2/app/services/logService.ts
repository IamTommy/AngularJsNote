import { Injectable } from '@angular/core';
import { logClass } from '../class/logClass';


@Injectable()
export class LogService {

    private logList:logClass[] = [];
    constructor() {

    }

    getLogList() {
      return this.logList;
    }

    createLog(title:string,message:string)
    {
      this.setLog(new logClass(
        this.logList.length + 1,
        title,
        message,
        (new Date()).toDateString()
      ));
    }

    setLog(log:logClass)
    {
      if(!log.id)
        log.id = this.logList.length + 1;
      this.logList.push(log);
      console.log(log);
    }
}
