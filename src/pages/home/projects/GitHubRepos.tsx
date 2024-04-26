import InfiniteScroll from 'react-infinite-scroller';
import styled from '@emotion/styled';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { useGlobalState } from '../../../context/useGlobalState';
import { useThemeState } from '../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../theme';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ, mobileThreshold } from '../../../theme/theme.constants';
import { Card } from './card';
import { useScreenSize } from '../../../hooks/useScreenSize';
import { useLocalizationState } from '../../../context/useLocalizationState';

const ITEMS_PER_PAGE = 6;

const GitHubRepos: React.FC = () => {
  const { width } = useScreenSize();
  const { theme } = useThemeState();
  const { translations } = useLocalizationState();

  const [items, setItems] = useState<Array<any>>([]);
  const [hasMore, setHasMore] = useState(true);

  const {
    github: { repos },
  } = useGlobalState();

  useEffect(() => {
    if (width > mobileThreshold) {
      setHasMore(true);
      setItems([...repos.slice(0, ITEMS_PER_PAGE)]);
    }
    if (width < mobileThreshold) {
      setHasMore(true);
      setItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    setItems(repos?.slice(0, ITEMS_PER_PAGE));
  }, [repos]);

  const onChage = (page: number) => {
    const startPos = (page - 1) * ITEMS_PER_PAGE;
    setItems(repos?.slice(startPos, startPos + ITEMS_PER_PAGE));
  };

  const fetchInfinitScrollData = () => {
    const moreItems = repos?.slice(items?.length, items?.length + ITEMS_PER_PAGE);

    if (hasMore && moreItems?.length > 0) {
      setItems([...items, ...moreItems]);
    } else {
      setHasMore(false);
    }
  };

  return (
    <Container className='sub-section-alternative' id='projects'>
      <H2 theme={theme} text={translations['Videos']}>
        {translations['Videos']}
      </H2>
      {width > mobileThreshold ? (
        <>
          <Crads>
            {(items || []).map((props: any, i: number) => {
              return <Card key={i} {...props} />;
            })}
          </Crads>
          <StyledPagination
            theme={theme}
            onChange={onChage}
            defaultCurrent={1}
            total={repos?.length || 0}
            pageSize={ITEMS_PER_PAGE}
          />
        </>
      ) : (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchInfinitScrollData}
            hasMore={hasMore}
            loader={<h4 key='loading'>Loading...</h4>}
          >
            <Crads>
              {(items || []).map((props: any, i: number) => {
                return <Card key={i} {...props} />;
              })}
            </Crads>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
};

export default GitHubRepos;

const StyledPagination = styled(Pagination)<{ theme: ThemeType }>`
  margin: 40px 0;
  padding: 0;
  & .ant-pagination-item-link {
    border-radius: 20px;
    background-color: ${(p) => THEMES[p.theme.themeName]?.paginationButton};
    color: ${Colors.white};
    border: none;
  }

  & li {
    border: none;
    border-radius: 20px;
    background-color: ${(p) => THEMES[p.theme.themeName]?.pageButton};
  }

  & a {
    color: ${Colors.white};
    line-height: 2.3;
  }

  & .ant-pagination-item-active {
    border: 1px solid ${Colors.white};
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px 20px 20px 20px;
`;

const Crads = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${DESKTOP_MQ} {
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
  }
`;

const H2 = styled.h2<{ theme: ThemeType; text: string }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h2};
  font-size: 50px;
  font-weight: bolder;
  margin: 20px 0;
  display: block;
  text-align: center;
  position: relative;

  &::after {
    content: '${(p) => p.text}';
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }

  ${DESKTOP_MQ} {
    margin: 40px 0 40px 0;
  }
`;
