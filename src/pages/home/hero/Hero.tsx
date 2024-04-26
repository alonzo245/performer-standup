import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { useThemeState } from '../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../theme';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ, mobileThreshold } from '../../../theme/theme.constants';
import topology from '../../../config/topology';
import ComedySpecial from '../../../components/ComedySpecial';
import { useScreenSize } from '../../../hooks/useScreenSize';
import { useLocalizationState } from '../../../context/useLocalizationState';

export const FACEBOOK_LINK = 'https://www.facebook.com/alonalush';
export const WHATSAPP_LINK =
  'whatsapp://send?text=שלום אלון פניתי בנושא מופע סטנדאפ אנא חזור אליי.&phone=972526299978';
export const YOUTUBE_LINK = 'https://www.youtube.com/@AlonAlush/shorts';
export const TIKTOK_LINK = 'https://www.tiktok.com/@alon_alush';
export const INSTAGRAM_LINK = '';

const Hero: React.FC = () => {
  const links = topology();
  const { theme } = useThemeState();
  const { width } = useScreenSize();
  const { locale, translations } = useLocalizationState();

  return (
    <Container theme={theme}>
      <Row text={locale}>
        <H1 theme={theme} text={translations['Alon Alush']}>
          {translations['Alon Alush']}
        </H1>
        <P></P>
        <div style={{ display: 'flex' }}>
          <StyledAnchorLink href='#about' theme={theme}>
            {translations['More Info']}
          </StyledAnchorLink>
          {/* <StyledAnchorLink href="#contact-me" theme={theme}> */}
          <A
            href='#'
            onClick={() => {
              window.document.location.href = WHATSAPP_LINK;
            }}
            theme={theme}
            bgColor='#00D25D'
            color='#ffffff'
          >
            {translations['WhatsApp']}
          </A>
        </div>

        {width > mobileThreshold && <ComedySpecial />}
      </Row>
      <RowContact>
        <Alon text={locale} />
        <Img src={`${links.baseUrl}/images/alon.png`} text={locale} />

        {/* <Link href={CV_LINK} data-tip data-for="cv">
                    <StyledIoDocumentAttachOutline color={Colors.white} size={50} />
                </Link>
                <Link href={GITHUB_LINK} target="_blank" data-tip data-for="github">
                    <span> {githubIcon(50)}</span>
                </Link>
                <Link href={LINKEDIN_LINK} target="_blank" data-tip data-for="linkedin">
                    <span>{linkedinIcon(50)}</span>
                </Link>
                <ReactTooltip id="cv" place="bottom" effect="solid">
                    My CV
                </ReactTooltip>
                <ReactTooltip id="linkedin" place="bottom" effect="solid">
                    Linkedin Profile
                </ReactTooltip>
                <ReactTooltip id="github" place="bottom" effect="solid">
                    GitHub Profile
                </ReactTooltip> */}
      </RowContact>
    </Container>
  );
};

export default Hero;

const Img = styled.img<{ text: string }>`
  height: 85%;
  transform-origin: bottom center;
  position: absolute;
  bottom: 0;
  left: 55%;
  z-index: 0;
  transform: scale(1.3) translateY(90px) translateX(-42%);

  ${DESKTOP_MQ} {
    transform-origin: bottom center;
    height: 120%;
    left: ${(p) => (p.text === 'heb' ? '10%' : 'unset')};
    right: ${(p) => (p.text === 'heb' ? 'unset' : '5px')};
    transform: unset;
  }
`;

const Alon = styled.div<{ text: string }>`
  height: 900px;
  width: 900px;
  border-radius: 50%;
  background-color: #ffffaf20;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -210px;

  ${DESKTOP_MQ} {
    transform: unset;
    bottom: 0px;
    left: ${(p) => (p.text === 'heb' ? '0%' : 'unset')};
    right: ${(p) => (p.text === 'heb' ? 'unset' : '0%')};
  }
`;

const Container = styled.div`
  display: flex;
  height: calc(100% - 60px);
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  ${DESKTOP_MQ} {
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledIoDocumentAttachOutline = styled(IoDocumentAttachOutline)`
  cursor: pointer;
`;

const H1 = styled.h1<{ theme: ThemeType; text: string }>`
  font-weight: bolder;
  font-size: 60px;
  /* margin-top: 10px; */
  color: ${(p) => THEMES[p.theme.themeName]?.h1};
  text-align: center;
  position: relative;
  margin: 10px 0 0px 0;

  ${DESKTOP_MQ} {
    font-size: 120px;
    text-align: left;
  }

  &::after {
    content: '${(p) => p.text}';
    color: yellow;
    z-index: 1;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;

const P = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 15px 0;
  text-align: center;

  ${DESKTOP_MQ} {
    margin-bottom: 30px;
    font-size: 38px;
  }
`;

const Row = styled.div<{ text: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-bottom: 30px;
  z-index: 1;

  ${DESKTOP_MQ} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: ${(p) => (p.text === 'heb' ? '80px' : '0px')};
    margin-right: ${(p) => (p.text === 'heb' ? '0px' : '80px')};
    margin-bottom: 80px;
  }
`;

const StyledAnchorLink = styled(AnchorLink)<{ theme: ThemeType; bgColor?: string; color?: string }>`
  width: 120px;
  height: 35px;
  border-radius: 20px;
  background: ${(p) => (p?.bgColor ? p?.bgColor : 'yellow')};
  text-align: center;
  font-size: 21px;
  padding: 5px 10px;
  color: ${(p) => (p?.color ? p?.color : Colors.black)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:last-child {
    margin-inline-start: 20px;
  }

  ${DESKTOP_MQ} {
    width: 200px;
    height: 55px;
    font-size: 35px;
  }
`;
const A = styled.a<{ theme: ThemeType; bgColor?: string; color?: string }>`
  width: 120px;
  height: 35px;
  border-radius: 20px;
  background: ${(p) => (p?.bgColor ? p?.bgColor : 'yellow')};
  text-align: center;
  font-size: 21px;
  padding: 5px 10px;
  color: ${(p) => (p?.color ? p?.color : Colors.black)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:last-child {
    margin-inline-start: 20px;
  }

  ${DESKTOP_MQ} {
    width: 200px;
    height: 55px;
    font-size: 35px;
  }
`;

const RowContact = styled.div`
  display: flex;
  padding-bottom: 200px;

  ${DESKTOP_MQ} {
    justify-content: space-around;
  }
`;

// const Link = styled.a`
//     display: block;
//     margin: 20px;
// `;
