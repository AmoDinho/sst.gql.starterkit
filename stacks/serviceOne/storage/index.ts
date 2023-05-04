import { Bucket } from 'sst/constructs';
import { Construct } from 'constructs';

export interface IBoatsBucket {
  boatsBucket: Bucket;
}

export interface IBoatsResourcesS3 {
  BoatsBucket: IBoatsBucket;
}

const BoatsBucket = (stack: Construct): IBoatsBucket => {
  const boatsBucket = new Bucket(stack, `boats-buckets`);
  return {
    boatsBucket,
  };
};

const BoatsResourceS3 = (stack: Construct) => {
  return {
    BoatsBucket: BoatsBucket(stack),
  };
};

export default BoatsResourceS3;
