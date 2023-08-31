import { FC } from 'react';
import { useQuery } from 'react-query';
import topology from '../../config/topology';
import { useGlobalState } from '../../context/useGlobalState';
import { AboutMe } from './aboutMe';
import { GitHubRepos } from './projects';
import { useScreenSize } from '../../hooks/useScreenSize';
import { mobileThreshold } from '../../theme/theme.constants';
import { Footer } from '../../views/footer';

const Home: FC = () => {
    const { width } = useScreenSize();
    const links = topology();
    const { setGlobalState } = useGlobalState();
    const { isLoading } = useQuery(
        'repos',
        () => {
            return fetch(`${links.baseUrl}${links.gitHubRepos}`).then((res) => res.json());
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
            {width < mobileThreshold && <Footer />}
            <GitHubRepos />
        </>
    );
};

export default Home;