import styled from "@emotion/styled";
import React from "react";
import { useThemeState } from "../../context/useThemeState";
import { THEMES, ThemeType } from "../../theme";
import { Footer } from "../footer";
import { Header } from "../header";
import ScrollToTop from "react-scroll-to-top";
import MobileContactLinks from "../MobileContactLinks";
import { useScreenSize } from "../../hooks/useScreenSize";
import ComedySpecial from "../../components/ComedySpecial";
import { mobileThreshold } from "../../theme/theme.constants";

interface Props {
  children: JSX.Element & React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const { theme } = useThemeState();
  const { width } = useScreenSize();

  return (
    <Container theme={theme}>
      <MobileContactLinks />
      <ScrollToTop smooth color="#a20000" style={{ bottom: "70px" }} />
      <Header />
      {width < mobileThreshold && <ComedySpecial />}
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.main<{ theme: ThemeType }>`
  background-color: ${(p) => THEMES[p.theme.themeName]?.mainBackground};
  color: ${(p) => THEMES[p.theme.themeName]?.textGeneral};
`;
