import styled from "@emotion/styled";
import { DESKTOP_MQ } from "../theme/theme.constants";

const ComedySpecial: React.FC = () => {
  return (
    <IframeContainer>
      <iframe
        style={{ margin: "0 auto", border: "9px solid yellow" }}
        src="https://drive.google.com/file/d/1U2pQLckiCmVumnSxjPOo_nDP3_8-C5XH/preview"
        width="260"
        height="480"
        allow="autoplay"
        scrolling="no"
      />
      {/* <div
      style={{
        width: "80px",
        height: "80px",
        position: "absolute",
        opacity: 0,
        right: "0px",
        top: "0px",
        backgroundColor: "red",
      }}
    ></div> */}
    </IframeContainer>
  );
};

export default ComedySpecial;

const IframeContainer = styled.div`
  margin: 80px auto;
  text-align: center;

  ${DESKTOP_MQ} {
    width: 260px;
    height: 480px;
    position: relative;
    padding-right: 85px;
    padding-top: 32px;
    margin: unset;
    text-align: unset;
  }
`;
