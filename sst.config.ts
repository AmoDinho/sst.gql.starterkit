import { SSTConfig } from 'sst';
import BoatsStack from './stacks/boats';
export default {
  config(_input) {
    return {
      name: 'serverless-apollo',
      region: 'eu-west-1',
    };
  },
  stacks(app) {
    app.stack(BoatsStack);
  },
} satisfies SSTConfig;
