import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
import {
  FACEBOOK_LINK,
  TIKTOK_LINK,
  WHATSAPP_LINK,
  YOUTUBE_LINK,
} from "../pages/home/hero/Hero";
import { DESKTOP_MQ, mobileThreshold } from "../theme/theme.constants";
import { useDebouncedCallback } from "use-debounce";
import subscribe from "subscribe-event";
import { useScreenSize } from "../hooks/useScreenSize";

const MobileContactLinks: FC = () => {
  const { width } = useScreenSize();
  const [iconsColor, setIconsColor] = useState("white");
  const [position, setPosition] = useState(window.pageYOffset);

  const size = 25;

  const debounced = useDebouncedCallback(() => {
    setPosition(window.pageYOffset);
  }, 100);

  useEffect(() => {
    const unsubscribe = subscribe(window, "scroll", debounced);
    return () => {
      unsubscribe();
    };
  }, []);

  return !position || width > mobileThreshold ? null : (
    <Container>
      <Row>
        <A href={WHATSAPP_LINK} target="_blank">
          <BsWhatsapp size={size} color={iconsColor} />
        </A>
        <A href={YOUTUBE_LINK} target="_blank">
          <BsYoutube size={size} color={iconsColor} />
        </A>
        <A href={TIKTOK_LINK} target="_blank">
          <FaTiktok size={size} color={iconsColor} />
        </A>
        <A href={FACEBOOK_LINK} target="_blank">
          <FaFacebookSquare size={size} color={iconsColor} />
        </A>
      </Row>
    </Container>
  );
};

export default MobileContactLinks;

const Row = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
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
