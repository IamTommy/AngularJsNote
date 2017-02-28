/**
 * Created by Administrator on 2017/2/28.
 */


import { FactoryService } from '../services/factoryService';
import { LogService } from '../services/logService';


let factoryServiceFactory = () => {
  return new FactoryService("test");
};

export let factoryServiceProvider =
{
  provide: FactoryService,
  useFactory: factoryServiceFactory
};
