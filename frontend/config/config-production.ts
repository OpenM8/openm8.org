/**
 * Add your live production URL here
 */
const HOSTED_URL = 'https://openm8.org/';

const configProduction = {
  HOSTED_URL,
  MODE: 'PRODUCTION',
  REGION: 'eu-west-1',
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  GRAPHQL_ENDPOINT: 'https://gtrrjkydabfjlppp5k5y75q2a4.appsync-api.eu-west-1.amazonaws.com/graphql',
};

export default configProduction;
