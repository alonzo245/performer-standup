import styled from '@emotion/styled';
import { toast } from 'react-toastify';

const CopyTextarea = ({ text }) => {
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
      <Textarea value={text} rows={3} cols={40} />
      <Button onClick={handleCopy}>העתק תוכן</Button>
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
  margin-top: 5px;
  width: 100%;
  padding: 4px;
  background-color: yellow;
  font-weight: bold;
  border-radius: 5px;
`;

export default CopyTextarea;
