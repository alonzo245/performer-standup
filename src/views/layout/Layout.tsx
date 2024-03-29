import styled from '@emotion/styled';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useThemeState } from '../../context/useThemeState';
import { THEMES, ThemeType } from '../../theme';
import { Footer } from '../footer';
import { Nav } from '../header/nav';
import MobileContactLinks from '../MobileContactLinks';

interface Props {
  children: JSX.Element & React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const { theme } = useThemeState();

  return (
    <Container theme={theme}>
      <MobileContactLinks />
      <Nav />
      <ScrollToTop smooth color='#a20000' style={{ bottom: '70px' }} />
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
