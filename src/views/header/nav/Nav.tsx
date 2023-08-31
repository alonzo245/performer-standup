import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars } from "react-icons/fa";
import { useScreenSize } from "../../../hooks/useScreenSize";
import Colors from "../../../theme/Colors";
import { DESKTOP_MQ, mobileThreshold } from "../../../theme/theme.constants";
import topology from "../../../config/topology";

const Nav: FC = () => {
  const links = topology();
  const { width } = useScreenSize();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width > mobileThreshold) {
      setOpen(false);
    }
  }, [width]);

  return (
    <Container show={open}>
      <Logo
        src={`${links.baseUrl}/images/logo.png`}
        alt="Full-Stack Developer"
      />
      <NavList show={open}>
        <li>
          <StyledAnchorLink href="#about" onClick={() => setOpen(false)}>
            מי אני
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href="#projects" onClick={() => setOpen(false)}>
            סרטונים
          </StyledAnchorLink>
        </li>
        <li>
          <StyledAnchorLink href="#contact-me" onClick={() => setOpen(false)}>
            הזמינו מופע
          </StyledAnchorLink>
        </li>
        {/* {width > mobileThreshold && (
                    <li>
                        <ThemeToggle />
                    </li>
                )} */}
      </NavList>
      {width < mobileThreshold && (
        <Span>
          {/* <ThemeToggle /> */}
          <Hamburger id="hamburger" onClick={() => setOpen(!open)}>
            <FaBars size={30} />
          </Hamburger>
        </Span>
      )}
    </Container>
  );
};

export default Nav;

const Container = styled.nav<{ show: boolean }>`
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => (p.show ? `#000000` : `${Colors.black}50`)};
  height: 60px;

  ${DESKTOP_MQ} {
    flex-direction: row-reverse;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    height: auto;
  }
`;

const NavList = styled.ul<{ show: boolean }>`
  display: ${(p) => (p.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0px;
  margin-top: 111px;
  padding: 0 0 20px 0;

  position: ${(p) => (p.show ? "absolute" : "unset")};
  top: 60px;
  margin: 0;
  width: 100%;
  background-color: #000000;
  z-index: 2;

  ${DESKTOP_MQ} {
    flex-direction: unset;
    background-color: transparent;
    margin: 30px 0;
    display: flex;
    list-style-type: none;
    width: 500px;
    justify-content: space-around;
    font-size: 30px;
    padding: 0;

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
  margin: 20px;
  border-radius: 40px;

  ${DESKTOP_MQ} {
    display: block;
    height: 60px;
    width: 60px;
  }
`;

const StyledAnchorLink = styled(AnchorLink)`
  cursor: pointer;
  color: ${Colors.white};
`;



const Hamburger = styled.button`
  cursor: pointer;
  display: flex;
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 30px;
  margin: 20px;
  align-items: center;
  height: 30px;

  &:focus {
    outline: 0;
  }

  ${DESKTOP_MQ} {
    display: none;
  }
`;
