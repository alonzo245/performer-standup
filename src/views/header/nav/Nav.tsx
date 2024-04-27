import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { FaBars, FaFacebookSquare, FaTiktok } from 'react-icons/fa';
import topology from '../../../config/topology';
import { useScreenSize } from '../../../hooks/useScreenSize';
import {
  FACEBOOK_LINK,
  TIKTOK_LINK,
  WHATSAPP_LINK,
  YOUTUBE_LINK,
} from '../../../pages/home/hero/Hero';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ, mobileThreshold } from '../../../theme/theme.constants';
import ReactCountryFlag from 'react-country-flag';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useLocalizationState } from '../../../context/useLocalizationState';
import LocalFlagSwitcher from '../../../components/LocalFlagSwitcher';

const Nav: FC = () => {
  const links = topology();
  const { width } = useScreenSize();
  const { locale, setLocale, translations } = useLocalizationState();
  // const [local, setLocal] = useLocalStorage('local');

  const [open, setOpen] = useState(false);
  const [iconsColor, setIconsColor] = useState('white');

  useEffect(() => {
    if (width > mobileThreshold) {
      setOpen(false);
      setIconsColor('white');
    }
    setIconsColor('white');
  }, [width]);

  return (
    <Container show={open}>
      <LinksRow>
        {/* <A href={""}>
          <FaInstagramSquare size={30} color={iconsColor} />
        </A> */}
        <LocalFlagSwitcher />

        {width > mobileThreshold && (
          <>
            <A href={WHATSAPP_LINK} target='_blank'>
              <BsWhatsapp size={30} color={iconsColor} />
            </A>
            <A href={YOUTUBE_LINK} target='_blank'>
              <BsYoutube size={30} color={iconsColor} />
            </A>
            <A href={TIKTOK_LINK} target='_blank'>
              <FaTiktok size={30} color={iconsColor} />
            </A>
            <A href={FACEBOOK_LINK} target='_blank'>
              <FaFacebookSquare size={30} color={iconsColor} />
            </A>
          </>
        )}

        <a href={'https://standup.alonalush.com'}>
          <Logo src={`${links.baseUrl}/images/logo.png`} alt='Full-Stack Developer' />
        </a>
      </LinksRow>
      <NavList show={open}>
        <li>
          <StyledAnchorLink href='/' onClick={() => setOpen(false)}>
            {translations['Main']}
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href='/#about' onClick={() => setOpen(false)}>
            {translations['Alon Alush']}
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href='/#show-types' onClick={() => setOpen(false)}>
            {translations['Shows']}
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href='/#projects' onClick={() => setOpen(false)}>
            {translations['Videos']}
          </StyledAnchorLink>
        </li>
        {/* <li>
          <StyledAnchorLink href="#contact-me" onClick={() => setOpen(false)}>
            הזמינו מופע
          </StyledAnchorLink>
        </li> */}
        {/* {width > mobileThreshold && (
                    <li>
                        <ThemeToggle />
                    </li>
                )} */}
      </NavList>
      {width < mobileThreshold && (
        <Span>
          {/* <ThemeToggle /> */}
          <Hamburger id='hamburger' onClick={() => setOpen(!open)}>
            <FaBars size={30} />
          </Hamburger>
        </Span>
      )}
    </Container>
  );
};

export default Nav;

const LinksRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  ${DESKTOP_MQ} {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const A = styled.a`
  margin-inline: 6px;
  &:hover * {
    color: yellow;
    fill: yellow;
  }
  ${DESKTOP_MQ} {
  }
`;

const Container = styled.nav<{ show: boolean }>`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0 13px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => (p.show ? `#000000` : `${Colors.black}50`)};
  height: 60px;

  ${DESKTOP_MQ} {
    flex-direction: row-reverse;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    height: 70px;
  }
`;

const NavList = styled.ul<{ show: boolean }>`
  display: ${(p) => (p.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0px;
  margin-top: 111px;
  padding: 0 0 20px 0;

  position: ${(p) => (p.show ? 'absolute' : 'unset')};
  top: 60px;
  margin: 0;
  width: 100%;
  background-color: #000000;
  z-index: 2;
  font-size: 27px;
  left: 0;

  & li {
    padding: 6px;
  }

  ${DESKTOP_MQ} {
    flex-direction: unset;
    background-color: transparent;
    margin: 30px 20px;
    display: flex;
    list-style-type: none;
    width: 500px;
    justify-content: space-around;
    font-size: 27px;
    padding: 0;

    & li {
      padding: 0px;
    }

    & > a {
      text-decoration: none;
    }
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: inline;
  height: 40px;
  width: 40px;
  margin: 10px;
  border-radius: 40px;

  ${DESKTOP_MQ} {
    display: block;
    height: 60px;
    width: 60px;
  }
`;

const StyledAnchorLink = styled.a`
  cursor: pointer;
  color: ${Colors.white};
  margin: 5px;
`;

const Hamburger = styled.button`
  cursor: pointer;
  display: flex;
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 30px;
  margin: 20px 0;
  align-items: center;
  height: 30px;

  &:focus {
    outline: 0;
  }

  ${DESKTOP_MQ} {
    display: none;
  }
`;
