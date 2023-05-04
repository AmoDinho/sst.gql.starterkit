import { Api } from 'sst/constructs';
import { Construct } from 'constructs';
export interface IBoatsAPIResource {
  BoatsAPI: Api;
}

const BoatsAPI = (Stack: Construct): Api => {
  const boatsAPI = new Api(Stack, `boats-stack-api`, {
    routes: {
      'POST /boats-graphql': {
        type: 'graphql',
        function: 'packages/boats/__graphql/index.handler',
      },
      // pothos: {
      //   schema: 'packages/boats/__graphql/schema.ts',
      //   output: 'packages/boats/__graphql/schema.graphql',
      //   commands: [
      //     'cd packages/boats/__graphql && npx @genql/cli --output ./genql --schema ./schema.graphql --esm',
      //   ],
      // },
    },
    defaults: {
      function: {
        timeout: 40,
      },
    },
  });

  return boatsAPI;
};

const BoatsResourcesAPI = (stack: Construct): IBoatsAPIResource => {
  return {
    BoatsAPI: BoatsAPI(stack),
  };
};

export default BoatsResourcesAPI;
