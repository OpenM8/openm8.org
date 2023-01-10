import developmentConfig from './config-development';
const HOSTED_URL = 'http://localhost:3000';

const configLocal = {
  ...developmentConfig,
  HOSTED_URL,
  MODE: 'LOCAL',
};

export default configLocal;
