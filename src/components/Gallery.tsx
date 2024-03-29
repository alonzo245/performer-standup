import styled from '@emotion/styled';
import React from 'react';
import ImageGallery from './ImageGallery';

interface Image {
  url: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Container>
      {images.map((image, index) => {
        return (
          <ImageWrapper key={index}>
            <ImageGallery key={index} image={image} />
          </ImageWrapper>
        );
      })}
    </Container>
  );
};

export default Gallery;

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
