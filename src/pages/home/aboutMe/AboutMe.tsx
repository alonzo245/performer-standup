import styled from '@emotion/styled';
import topology from '../../../config/topology';
import { useThemeState } from '../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../theme';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ } from '../../../theme/theme.constants';

const AboutMe: React.FC = () => {
  const links = topology();
  const { theme } = useThemeState();

  return (
    <Container id='about'>
      <H2 theme={theme}>אלון אלוש</H2>
      <Row>
        <Img src={`${links.baseUrl}/images/img2.png`} alt='אלון אלוש' />
        <Article>
          <P>הייטקיסט וסטנדאפיסט שמוצא את הצחוק במשרד ובחייו האישיים.</P>
          <P>נהנה לשתף סיפורים מצחיקים מהחיים השגרתיים על הצד המצחיק שלהם.</P>
          <P>המופע מתאים לערבי גיבוש עובדים, ימי כיף, כנסים, אירועי חברה וימי הולדת.</P>
          <P>בואו נצחק ביחד באירוע הבא.</P>
        </Article>
      </Row>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  ${DESKTOP_MQ} {
    padding: 80px;
  }
`;

const H2 = styled.h2<{ theme: ThemeType }>`
  color: ${(p) => THEMES[p.theme.themeName]?.h2};
  display: block;
  font-size: 50px;
  font-weight: bolder;
  position: relative;
  text-align: center;
  margin: 10px auto;

  &::after {
    content: 'אלון אלוש';
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }

  ${DESKTOP_MQ} {
    text-align: start;
    margin: 0;
  }
`;

const Img = styled.img`
  width: 300px;
  border-radius: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 5px solid yellow;
  margin-right: 0px;

  ${DESKTOP_MQ} {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${DESKTOP_MQ} {
    flex-direction: row-reverse;
  }
`;

const P = styled.p`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 300;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  ${DESKTOP_MQ} {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 300;
    font-size: 25px;
  }
`;
const Article = styled.article`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 300;
  width: 100%;

  ${DESKTOP_MQ} {
    margin: 0;
    font-size: 30px;
    font-weight: 300;
  }
`;
