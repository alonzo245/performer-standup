import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { useThemeState } from '../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../theme';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ } from '../../../theme/theme.constants';

export const FACEBOOK_LINK = 'https://www.facebook.com/alonalush';

const Hero: React.FC = () => {
    const { theme } = useThemeState();

    return (
        <Container theme={theme}>
            <Row>
                <H1 theme={theme}>אלון אלוש</H1>
                <P>מופע סטנדאפ</P>
                <StyledAnchorLink href="#about" theme={theme}>
                    מי אני
                </StyledAnchorLink>
            </Row>
            <RowContact>
                
                    <Alon />
                        <Img src="/images/alon.png" />
           
                
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

const Img = styled.img`
    height: 100%;
    transform-origin: bottom center;
    position: absolute;
    bottom: 0;
    left: 0%;
    z-index: 0;
    
    ${DESKTOP_MQ} {
        height: 120%;
        left: 10%;
    }
`;

const Alon = styled.div`
    height: 900px;
    width: 900px;
    border-radius: 50%;
    background-color: #ffffaf20;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -200px;


    ${DESKTOP_MQ} {
        transform: unset;
        bottom: 0px;
        left: 0%;
        right: unset;
    }
`;

const Container = styled.div`
    display: flex;
    height: calc(100% - 100px);
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

const H1 = styled.h1<{ theme: ThemeType }>`
    font-weight: bolder;
    font-size: 70px;
    margin-top:10px;
    color: ${(p) => THEMES[p.theme.themeName]?.h1};
    text-align: center;
    position: relative;

    ${DESKTOP_MQ} {
        margin: 0;
        margin-top: 80px;
        font-size: 120px;
        text-align: left;
        margin-top: 0;
    }

    &::after {
        content: 'אלון אלוש';
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
    font-weight: 300;
    margin-bottom: 10px;
    font-weight: bold;

    ${DESKTOP_MQ} {
        margin-bottom: 30px;
        font-size: 50px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    margin-bottom: 30px;
    z-index: 1;

    ${DESKTOP_MQ} {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 80px;
        margin-bottom: 400px;
    }
`;

const StyledAnchorLink = styled(AnchorLink)<{ theme: ThemeType }>`
    width: 200px;
    height: 55px;
    border-radius: 20px;
    background: yellow;
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding: 5px 20px;
    color: ${Colors.black};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

const RowContact = styled.div`
    display: flex;
    padding-bottom: 200px;

    ${DESKTOP_MQ} {
        justify-content: space-around;
    }
`;

const Link = styled.a`
    display: block;
    margin: 20px;
`;
