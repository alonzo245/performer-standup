import styled from "@emotion/styled";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { useThemeState } from "../../context/useThemeState";
import { FACEBOOK_LINK, WHATSAPP_LINK } from "../../pages/home/hero/Hero";
import { THEMES, ThemeType } from "../../theme";
import { RiWhatsappFill } from "react-icons/ri";

const Footer: React.FC = () => {
  const { theme } = useThemeState();

  return (
    <Container id="contact-me" theme={theme}>
      <H5>אלון אלוש</H5>
      <P>בחרו כיצד ליצור איתי קשר</P>
      <Row>
        {/* <Link href={CV_LINK} data-tip data-for="cv">
                <BsFacebook color='#fff' size={40} />
                </Link> */}
        <Link href={WHATSAPP_LINK} data-tip data-for="github">
          <RiWhatsappFill color="#fff" size={45} />
          <AltText>וואטסאפ</AltText>
        </Link>
        <Link href={FACEBOOK_LINK} target="_blank" data-tip data-for="github">
          <BsFacebook color="#fff" size={40} />
          <AltText>פייסבוק</AltText>
        </Link>

        {/* <Link href={LINKEDIN_LINK} target="_blank" data-tip data-for="linkedin">
                <BsFacebook color='#fff' size={40} />
                </Link> */}
      </Row>
    </Container>
  );
};

export default Footer;

const AltText = styled.div`
  color: white;
  margin-top: 10px;
 
`;
const Link = styled.a`
  display: block;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`;

const H5 = styled.h5`
  color: white;
  font-weight: bolder;
  font-size: 40px;
  margin: 10px;
`;

const P = styled.footer`
  color: white;
  margin: 0px 10px 10px 10px;
`;

const Container = styled.footer<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => THEMES[p.theme.themeName]?.footerBackground};
  color: white;
  text-align: center;
  padding: 10px;
`;
