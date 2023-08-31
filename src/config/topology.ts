interface ITopology {
    production: {
        gitHubRepos: string;
        baseUrl: string;
    };
    development: {
        baseUrl: string;
        gitHubRepos: string;
    };
}
const topology = () => {
    const links: ITopology = {
        production: {
            baseUrl: 'https://alonzo245.github.io/performer-standup',
            gitHubRepos: '/api/repos.json',
        },
        development: {
            baseUrl: 'http://localhost:3000',
            gitHubRepos: '/api/repos.json',
        },
    };

    const env = process.env.NODE_ENV;
    return links[env as keyof ITopology];
};

export default topology;
