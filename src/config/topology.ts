interface ITopology {
  production: {
    gitHubRepos: string;
    baseUrl: string;
    isProd: boolean;
  };
  development: {
    baseUrl: string;
    gitHubRepos: string;
    isProd: boolean;
  };
}
const topology = () => {
  const links: ITopology = {
    production: {
      baseUrl: 'https://standup.alonalush.com',
      gitHubRepos: '/api/repos.json',
      isProd: true,
    },
    development: {
      baseUrl: 'http://localhost:3000',
      gitHubRepos: '/api/repos.json',
      isProd: false,
    },
  };

  const env = process.env.NODE_ENV;
  return links[env as keyof ITopology];
};

export default topology;
