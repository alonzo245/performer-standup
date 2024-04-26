import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import { mobileThreshold } from '../theme/theme.constants';
import { useScreenSize } from '../hooks/useScreenSize';
import { useLocalizationState } from '../context/useLocalizationState';

const CopyTextarea = ({ text }) => {
  const { width } = useScreenSize();
  const { translations } = useLocalizationState();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast('טקסט הועתק', {
          position: 'top-left',
          autoClose: 1300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.log('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <Container>
      <Textarea value={text} rows={width > mobileThreshold ? 3 : 8} cols={40} />
      <Button onClick={handleCopy}>{translations['Videos']}</Button>
    </Container>
  );
};

const Textarea = styled.textarea`
  background-color: #00000050;
  color: wheat;
  padding: 10px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`;
const Button = styled.button`
  display: block;
  margin-top: 15px;
  width: 100%;
  padding: 4px;
  background-color: yellow;
  font-weight: bold;
  border-radius: 5px;
  border: 0;
`;

export default CopyTextarea;
