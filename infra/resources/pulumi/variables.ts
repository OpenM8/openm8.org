import { Output } from '@pulumi/pulumi';

export const variables = {
  region: 'eu-west-1' as const,
  dynamoDBTables: {} as Record<string, Output<string>>,
};
