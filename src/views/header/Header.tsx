import styled from "@emotion/styled";
import { useThemeState } from "../../context/useThemeState";
import { Hero } from "../../pages/home/hero";
import { ThemeType } from "../../theme";
import { Nav } from "./nav";
import topology from "../../config/topology";

const Header: React.FC = () => {
    const links = topology();
  const { theme } = useThemeState();

  return (
    <Container theme={theme} bgImage={`${links.baseUrl}/images/bg.jpg`}>
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

const Container = styled.header<{ theme: ThemeType; bgImage: string }>`
  /* background-color: ${(p) => p.theme.heroBackground}; */
  height: 100vh;
  color: white;
  font-size: 40px;
  background-image: url(${p => p.bgImage});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: top center;
  overflow: hidden;
`;
