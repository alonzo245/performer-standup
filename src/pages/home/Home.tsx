import { FC } from 'react';
import { useQuery } from 'react-query';
import topology from '../../config/topology';
import { useGlobalState } from '../../context/useGlobalState';
import { AboutMe } from './aboutMe';
import { GitHubRepos } from './projects';

const Home: FC = () => {
    const links = topology();
    const { setGlobalState } = useGlobalState();
    const { isLoading } = useQuery(
        'repos',
        () => {
            return fetch(links.gitHubRepos).then((res) => res.json());
        },
        {
            onSuccess: (data) => {
                const repos = (data || []).map((item: any) => {
                    return {
                        title: (item?.name || '').replaceAll(/-|_/gi, ' '),
                        description: item?.description,
                        link: item?.link
                    };
                });
                setGlobalState({ github: { repos: [...repos] } });
            },
        },
    );

    return isLoading ? null : (
        <>
            <AboutMe />
            <GitHubRepos />
        </>
    );
};

export default Home;
