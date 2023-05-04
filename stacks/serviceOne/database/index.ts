import { Table } from 'sst/constructs';
import { Construct } from 'constructs';

export interface IBoatsTable {
  table: Table;
}

export interface IBoatsResourcesDynamoDB {
  BoatsTable: IBoatsTable;
}

const BoatsTable = (stack: Construct): IBoatsTable => {
  const table = new Table(stack, `boats-table`, {
    fields: {
      boat_id: 'string',
      boat_name: 'string',
      boat_type: 'string',
    },
    primaryIndex: { partitionKey: 'boat_id' },
    globalIndexes: {
      gsi_one: { partitionKey: 'boat_type' },
    },
  });

  return { table };
};

const BoatsResoucesDynamoDB = (stack: Construct): IBoatsResourcesDynamoDB => {
  return {
    BoatsTable: BoatsTable(stack),
  };
};

export default BoatsResoucesDynamoDB;
