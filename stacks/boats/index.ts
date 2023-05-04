import { StackContext } from 'sst/constructs';
import BoatsResourcesAPI from './api';
import BoatsResoucesDynamoDB from './database';
import BoatsResourceS3 from './storage/';
/*
Each service needs a stack file where you combine 
various peices of infrustruce.

Infra to add:

- [ DynamoDB]
- [ S3]
- [ SQS]



*/
const BoatsStack = ({ stack }: StackContext) => {
  const boatsResourcesAPI = BoatsResourcesAPI(stack);
  const boatsResoucesDynamoDB = BoatsResoucesDynamoDB(stack);
  const boatsResourcesS3 = BoatsResourceS3(stack);

  stack.addOutputs({
    BoatsAPIEndpoint: boatsResourcesAPI.BoatsAPI.url,
  });
  stack.addOutputs({
    BoatsS3Bucket: boatsResourcesS3.BoatsBucket.boatsBucket.bucketName,
  });
  return {
    boatsResourcesAPI,
    boatsResourcesS3,
    boatsResoucesDynamoDB,
  };
};
export default BoatsStack;
