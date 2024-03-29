import { FC, useRef } from 'react';
import { useQuery } from 'react-query';
import topology from '../../config/topology';
import { useGlobalState } from '../../context/useGlobalState';
import { AboutMe } from './aboutMe';
import { ShowTypes } from './showTypes';
import { GitHubRepos } from './projects';
import { useScreenSize } from '../../hooks/useScreenSize';
import { mobileThreshold } from '../../theme/theme.constants';
import { Footer } from '../../views/footer';
import { Header } from '../../views/header';
import ComedySpecial from '../../components/ComedySpecial';
import styled from '@emotion/styled';

const Home: FC = () => {
  const containerRef = useRef(null);
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
            link: item?.link,
            type: item?.type || '',
          };
        });
        setGlobalState({ github: { repos: [...repos] } });
      },
    },
  );

  return isLoading ? null : (
    <div ref={containerRef}>
      <Header />
      {width < mobileThreshold && (
        <div>
          <Title>קטעים ממופע הסטנדאפ האישי</Title>
          <ComedySpecial />
        </div>
      )}
      <AboutMe />
      <ShowTypes />
      {width < mobileThreshold && <Footer />}
      <GitHubRepos />
    </div>
  );
};

export default Home;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding-top: 40px;
  margin: 0 auto;
`;
