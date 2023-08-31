import styled from '@emotion/styled';
import React from 'react';
import { useThemeState } from '../../context/useThemeState';
import { THEMES, ThemeType } from '../../theme';
import { Footer } from '../footer';
import { Header } from '../header';

interface Props {
    children: JSX.Element & React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    const { theme } = useThemeState();

    return (
        <Container theme={theme}>
            <Header />
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
