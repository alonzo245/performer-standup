import styled from '@emotion/styled';
import { FaBirthdayCake, FaTheaterMasks } from 'react-icons/fa';
import { GiTheater } from 'react-icons/gi';
import { useThemeState } from '../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../theme';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ } from '../../../theme/theme.constants';
import { useLocalizationState } from '../../../context/useLocalizationState';

const AboutMe: React.FC = () => {
  const { theme } = useThemeState();
  const { translations } = useLocalizationState();

  return (
    <Container id='show-types'>
      <H3 theme={theme} text={translations['Shows']}>
        {translations['Shows']}
      </H3>
      <Row>
        <Article>
          <Circle>
            <GiTheater size={40} color='yellow' />
          </Circle>{' '}
          <P size={30}>{translations['Corporate Stand-Up']}</P>
          {translations['Corporate Stand-Up TEXT'] && (
            <P size={19}>{translations['Corporate Stand-Up TEXT']}</P>
          )}
        </Article>

        <Article>
          <Circle>
            <FaTheaterMasks size={40} color='yellow' />
          </Circle>
          <P size={30}>{translations['Custom Theme Show']}</P>
          {translations['Custom Theme Show TEXT'] && (
            <P size={19}>{translations['Custom Theme Show TEXT']}</P>
          )}
        </Article>

        <Article>
          <Circle>
            <FaBirthdayCake size={40} color='yellow' />
          </Circle>
          <P size={30}>{translations['Family Events']}</P>
          {translations['Family Events TEXT'] && (
            <P size={19}>{translations['Family Events TEXT']}</P>
          )}
        </Article>

        <Article>
          <Circle>
            <FaTheaterMasks size={40} color='yellow' />
          </Circle>
          <P size={30}>{translations['Events Hosting']}</P>
          {translations['Events Hosting TEXT'] && (
            <P size={19}>{translations['Events Hosting TEXT']}</P>
          )}
        </Article>
      </Row>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  padding: 10px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #11111b;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  ${DESKTOP_MQ} {
    padding: 40px;
  }
`;

const H3 = styled.h3<{ theme: ThemeType; text: string }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h2};
  display: block;
  font-size: 50px;
  font-weight: bolder;
  position: relative;
  text-align: center;
  margin: 10px auto 0px auto;

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
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 150px;
  margin-top: 0px;
  border: 5px solid red;
  margin: 0 auto;

  ${DESKTOP_MQ} {
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  ${DESKTOP_MQ} {
    flex-direction: row;
  }
`;

const P = styled.p<{ size?: number }>`
  margin-bottom: 0px;
  font-size: ${(p) => p?.size || 22}px;
  font-weight: 300;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  ${DESKTOP_MQ} {
    /* margin-bottom: 30px; */
    /* font-size: 30px; */
    font-weight: 300;
    /* font-size: 25px; */
  }
`;
const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 300;
  max-width: 100%;
  width: 100%;
  background-color: #191928;
  padding: 20px;
  max-height: 100%;
  margin: 10px auto;
  text-align: center;
  flex-wrap: wrap;

  ${DESKTOP_MQ} {
    max-width: 250px;
    min-height: 370px;
    max-height: 370px;
  }
`;
