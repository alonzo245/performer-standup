import styled from '@emotion/styled';
import React from 'react';

interface Image {
  url: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const handleDownload = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <Container>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <Img src={image.url} />
          <Button onClick={() => handleDownload(image.url)}>הורדה</Button>
        </ImageWrapper>
      ))}
    </Container>
  );
};

export default ImageGallery;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ImageWrapper = styled.div`
  margin: 10px;
`;

const Img = styled.img`
  /* max-width: 200px; */
  height: 200px;
  object-fit: cover;
  border-radius: 9px;
`;

const Button = styled.button`
  display: block;
  margin-top: 5px;
  width: 100%;
  padding: 4px;
  background-color: yellow;
  font-weight: bold;
`;
