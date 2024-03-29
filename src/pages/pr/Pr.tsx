import { FC, useEffect } from 'react';
import topology from '../../config/topology';
import styled from '@emotion/styled';
import CopyTextarea from '../../components/CopyTextarea';
import Gallery from '../../components/Gallery';

const Pr: FC = () => {
  const links = topology();

  const images = [
    { url: `${links.baseUrl}/images/pr/13.png` },
    { url: `${links.baseUrl}/images/pr/1.png` },
    { url: `${links.baseUrl}/images/pr/3.png` },
    { url: `${links.baseUrl}/images/pr/4.png` },
    { url: `${links.baseUrl}/images/pr/6.png` },
    { url: `${links.baseUrl}/images/pr/7.png` },
    { url: `${links.baseUrl}/images/pr/8.png` },
    { url: `${links.baseUrl}/images/pr/2.png` },
    { url: `${links.baseUrl}/images/pr/5.png` },
    { url: `${links.baseUrl}/images/pr/9.png` },
    { url: `${links.baseUrl}/images/pr/10.png` },
    { url: `${links.baseUrl}/images/pr/11.png` },
    { url: `${links.baseUrl}/images/pr/12.png` },
    { url: `${links.baseUrl}/images/pr/0.png` },
  ];

  const eng = `Alon Alush is a tech developer and a stand-up artist who talk about people, computers and the office that glue them all together`;

  const heb = `אלון אלוש סטנדאפיסט הייטקיסט שצוחק על ההייטק ועל כל מה שמחבר בין אנשים למחשבים במשרד.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <H5>תוכן לפירסומים</H5>
      <Row>
        <CopyTextarea text={heb} />
        <CopyTextarea text={eng} />
      </Row>
      <H5>תמונות פירסומים להורדה</H5>
      <Gallery images={images} />
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
`;

const H5 = styled.div`
  margin: 30px auto 20px auto;
  width: 100%;
  padding: 0 20px;
  font-size: 30px;
  font-weight: bold;
`;

const Container = styled.div`
  padding: 70px 0 0 0;
  max-width: 1100px;
  margin: 0 auto 30px auto;
`;

export default Pr;
