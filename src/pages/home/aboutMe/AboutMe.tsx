import styled from "@emotion/styled";
import AvatarImg from "../../../assets/images/avatar.jpeg";
import { useThemeState } from "../../../context/useThemeState";
import { THEMES, ThemeType } from "../../../theme";
import Colors from "../../../theme/Colors";
import { DESKTOP_MQ } from "../../../theme/theme.constants";

const AboutMe: React.FC = () => {
  const { theme } = useThemeState();

  return (
    <Container id="about">
      <H2 theme={theme}>מי אני</H2>
      <Row>
        <Img src={"/images/img2.png"} alt="אלון אלוש" />
        <Article>
        <P>
          אלון אלוש הייטקיסט וסטנדאפיסט בלב ובנשמה, מצליח למצוא את הצחוק בכל
          מקום ובכל זמן. הבמה היא הבית השני שלו, המקום שבו הוא יגרום לכם לצחוק
          על כל דבר שמעניין אותו.
        </P>
        <P>
          אלון, אוהב לספר סיפורים מהחיים השגרתיים, על הצד המופרע שכולנו מדחיקים,
          יש לו יכולת לראות את הצדדים ההומוריסטים במצבים שמאתגרים את כולנו ביום
          יום, הוא חושף את הצד הבלתי רשמי שבנו, וגורם לכל אחד לחייך.
        </P>
        <P>
          הצחוק הוא כלי התקשורת החברתי שלו, והבמה היא הנתיב שמאפשר לו להעביר את
          המסר לעולם. עם המיקרופון ביד, במה וקהל הוא מוכן להוציא את הצחוק המרגש
          שבכולנו.
        </P>
        </Article>
      </Row>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  padding: 40px;
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
  text-align: center;
  position: relative;

  &::after {
    content: "מי אני";
    color: ${Colors.white};
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;

const Img = styled.img`
  width: 300px;
  border-radius: 150px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 5px solid yellow;

  ${DESKTOP_MQ} {
    margin-top: 0;
    margin-bottom: 0;
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
  font-size: 25px;
  font-weight: 300;
  width: 100%;

  ${DESKTOP_MQ} {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 300;
    
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
