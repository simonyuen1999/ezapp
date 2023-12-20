import * as cdk from 'aws-cdk-lib';
import { Lambda } from './Lambda';
import { Construct } from 'constructs';
import { ApiGateway } from './ApiGateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EzappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  // Api Gateway setup
  const api = new ApiGateway(this);

  //Lambdas setup
  const healthLambda = new Lambda(this, "health");

  // Add this Lambda into Api
  api.addIntegration("GET", "/health", healthLambda);
  }
}
