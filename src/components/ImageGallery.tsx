import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import topology from '../config/topology';
import { useLocalizationState } from '../context/useLocalizationState';

interface ImageGalleryProps {
  image: any;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ image }) => {
  const links = topology();
  const { translations } = useLocalizationState();

  const [imageWidth, setImageWidth] = useState<any>(null);
  const [imageHeight, setImageHeight] = useState<any>(null);

  const getFilenameFromUrl = (url) => {
    const path = url.split('/').pop();
    return decodeURIComponent(path);
  };

  const handleClick = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const filename = getFilenameFromUrl(imageUrl);
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast('תמונה נשמרה בהצלחה', {
        position: 'top-left',
        autoClose: 1600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const getImageDimensions = (imageUrl) => {
    const img = new Image();
    console.log(`${imageUrl}`);

    img.src = `${imageUrl}`;
    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
    };
  };

  useEffect(() => {
    getImageDimensions(image.url);
  }, []);

  return (
    <div>
      <ImageWrapper>
        <Img src={image.url} />
        <Dimensions>{`${imageWidth}px X ${imageHeight}px`}</Dimensions>
        <Button onClick={() => handleClick(image.url)}>{translations['Download']}</Button>
      </ImageWrapper>
    </div>
  );
};

const Dimensions = styled.div`
  direction: ltr;
  text-align: center;
  padding: 4px;
`;

const ImageWrapper = styled.div`
  margin: 10px;
`;

const Img = styled.img`
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
  border: 0;
  border-radius: 5px;
`;
export default ImageGallery;
