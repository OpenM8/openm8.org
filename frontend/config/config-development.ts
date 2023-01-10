/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.openm8.org/';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  GRAPHQL_ENDPOINT: 'https://gtrrjkydabfjlppp5k5y75q2a4.appsync-api.eu-west-1.amazonaws.com/graphql',
};

export default configDevelopment;
