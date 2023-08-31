import styled from "@emotion/styled";
import { useThemeState } from "../../context/useThemeState";
import { Hero } from "../../pages/home/hero";
import { ThemeType } from "../../theme";
import { Nav } from "./nav";

const Header: React.FC = () => {
  const { theme } = useThemeState();

  return (
    <Container theme={theme}>
      <Nav />
      <Row>
        <Hero />
      </Row>
    </Container>
  );
};

export default Header;

const Row = styled.div`
  height: 100vh;
  color: white;
  font-size: 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Container = styled.header<{ theme: ThemeType }>`
  /* background-color: ${(p) => p.theme.heroBackground}; */
  height: 100vh;
  color: white;
  font-size: 40px;
  background-image: url("/images/bg.jpg");
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: top center;
`;
