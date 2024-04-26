import styled from '@emotion/styled';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { useThemeState } from '../../context/useThemeState';
import {
  FACEBOOK_LINK,
  TIKTOK_LINK,
  WHATSAPP_LINK,
  YOUTUBE_LINK,
} from '../../pages/home/hero/Hero';
import { THEMES, ThemeType } from '../../theme';
import { DESKTOP_MQ } from '../../theme/theme.constants';
import { NavLink } from 'react-router-dom';
import { useLocalizationState } from '../../context/useLocalizationState';
import LocalFlagSwitcher from '../../components/LocalFlagSwitcher';

const Footer: React.FC = () => {
  const { theme } = useThemeState();
  const { translations } = useLocalizationState();

  return (
    <Container id='contact-me' theme={theme}>
      <H5>{translations['Alon Alush']}</H5>
      <P>
        <span>{translations['Contact Me']}</span> |{' '}
        <StyledNavLink to={'/performer-standup/pr'}>
          {translations['Public relations']}
        </StyledNavLink>
      </P>
      <Row>
        <Link data-tip data-for='github'>
          <LocalFlagSwitcher />
          <AltText>{translations['Language']}</AltText>
        </Link>
        <Link href={WHATSAPP_LINK} data-tip data-for='github'>
          <RiWhatsappFill color='#fff' size={45} />
          <AltText>{translations['WhatsApp']}</AltText>
        </Link>
        <Link href={FACEBOOK_LINK} target='_blank' data-tip data-for='github'>
          <BsFacebook color='#fff' size={40} />
          <AltText>{translations['Facebook']}</AltText>
        </Link>
        <Link href={YOUTUBE_LINK} target='_blank'>
          <BsYoutube size={30} color='#fff' />
          <AltText>{translations['YouTube']}</AltText>
        </Link>
        <Link href={TIKTOK_LINK} target='_blank'>
          <FaTiktok size={30} color='#fff' />
          <AltText>{translations['TikTok']}</AltText>
        </Link>
      </Row>
    </Container>
  );
};

export default Footer;

const StyledNavLink = styled(NavLink)`
  color: white;
`;

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
  justify-content: space-evenly;
  max-width: 100%;

  ${DESKTOP_MQ} {
    display: flex;
    /* max-width: 300px; */
  }
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
  margin-bottom: 70px;
  ${DESKTOP_MQ} {
    margin-bottom: 0px;
  }
`;
