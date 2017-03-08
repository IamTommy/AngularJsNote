/**
 * Created by Administrator on 2017/2/28.
 */


import { FactoryService } from '../services/factoryService';
import { LogService } from '../services/logService';


let factoryServiceFactory = (log:LogService) => {
  console.log(log);
  return new FactoryService("test");
};

let services:any[] = [LogService];

export let factoryServiceProvider =
{
  provide: FactoryService,
  useFactory: factoryServiceFactory,
  deps:services
};
