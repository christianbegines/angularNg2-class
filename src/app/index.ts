import * as services from './services';
export { App } from './app';
export { routes} from './routes.router';
import { Store }  from './store';

const mapValuesToArray = (obj) => Object.keys(obj).map(key=>obj[key]);

export const providers =[
  Store,
  ...mapValuesToArray(services)
];
