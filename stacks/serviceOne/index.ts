import { StackContext } from 'sst/constructs';
import ServiceOneResourcesAPI from './api';
import ServiceOneResoucesDynamoDB from './database';
import ServiceOneResourceS3 from './storage';
/*
Each service needs a stack file where you combine 
various peices of infrustruce.

Infra to add:

- [ DynamoDB]
- [ S3]
- [ SQS]



*/
const ServiceOneStack = ({ stack }: StackContext) => {
  const serviceOneResourcesAPI = ServiceOneResourcesAPI(stack);
  const serviceOneResoucesDynamoDB = ServiceOneResoucesDynamoDB(stack);
  const serviceOneResourcesS3 = ServiceOneResourceS3(stack);

  stack.addOutputs({
    BoatsAPIEndpoint: serviceOneResourcesAPI.ServiceOneAPI.url,
  });
  stack.addOutputs({
    BoatsS3Bucket:
      serviceOneResourcesS3.ServiceOneBucket.serviceOneBucket.bucketName,
  });
  return {
    serviceOneResourcesAPI,
    serviceOneResourcesS3,
    serviceOneResoucesDynamoDB,
  };
};
export default ServiceOneStack;
