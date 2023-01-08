/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '5i7c1dng4uje0pg81c2ea0ani3',
  USER_POOL_ID: 'eu-west-1_SfYRUNy4g',
  IDENTITY_POOL_ID: 'eu-west-1:8291ab8e-fae6-44c6-a891-dfa8742bd5c3',
  GRAPHQL_ENDPOINT: 'https://wmzrofqpejcxrhjzmnxfl6r2zq.appsync-api.eu-west-1.amazonaws.com/graphql',
};

export default configDevelopment;
