import Constants from 'expo-constants';

const ENV = {
  dev: {
    REACT_APP_API_KEY: '41c1957da326302055c726cc7da9564c',
  },
  prod: {
    REACT_APP_API_KEY: '41c1957da326302055c726cc7da9564c',
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
