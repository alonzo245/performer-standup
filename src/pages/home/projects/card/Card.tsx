import styled from "@emotion/styled";
import { FC } from "react";
import { DESKTOP_MQ } from "../../../../theme/theme.constants";
interface Props {
  image: string;
  title: string;
  description: string;
  link: string;
  updatedAt: string;
  type: string;
}
const Card: FC<Props> = ({ link, type }) => {
//   const { theme } = useThemeState();

return type === "vertical" ? (
  <IframeVertical
    src={link}
    frameBorder="0"
    allow="accelerometer; web-share"
    allowFullScreen
  />
) : (
  <IframeLandscape
    src={link}
    frameBorder="0"
    allow="accelerometer; web-share"
    allowFullScreen
  />
);
};

export default Card;

const IframeLandscape = styled.iframe`
  width: 100%;
  max-width: 315px;
  height: 215px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const IframeVertical = styled.iframe`
  width: 100%;
  width: 315px;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 20px;
  ${DESKTOP_MQ} {
    width: 315px;
    height: 650px;
  }
`;

// const Container = styled.div<{ theme: ThemeType }>`
//   width: 100%;
//   height: 100% / 2;
//   border-radius: 10px;
//   padding: 10px;

//   ${DESKTOP_MQ} {
//     /* max-width: 300px; */
//   }
// `;

// const Link = styled.a<{ theme: ThemeType }>`
//   display: block;
//   text-decoration: none;
//   background: ${(p) => p.theme.button};
//   padding: 10px;
//   border-radius: 10px;
//   color: ${Colors.white};
//   align-self: flex-end;
//   width: 100%;

//   &:hover {
//     color: unset;
//     background-color: ${(p) => THEMES[p.theme.themeName]?.cardButtonHover};
//   }
// `;

// const H3 = styled.h3<{ theme: ThemeType }>`
//   color: ${(p) => THEMES[p.theme.themeName]?.h3};
//   margin: 15px 0;
//   font-size: 15px;
//   font-weight: 300;
//   text-transform: capitalize;
// `;

// const StyledAiFillGithub = styled(AiFillGithub)`
//   position: absolute;
//   top: 120px;
//   right: 0px;
//   background-color: black;
//   border-radius: 30px;
// `;

// const UpdatedAt = styled.p`
//   font-size: 12px;
//   font-style: italic;
//   font-weight: 30x0;
// `;

// const P = styled.p`
//   margin: 0;
//   font-size: 15px;
//   font-weight: 300;
// `;

// const Img = styled.img`
//   margin-top: 25px;
//   margin-bottom: 20px;
//   width: 130px;
//   border-radius: 125px;
// `;
