import { FC } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useLocalizationState } from '../context/useLocalizationState';
import styled from '@emotion/styled';

const LocalFlagSwitcher: FC = () => {
  const { locale, setLocale } = useLocalizationState();

  const updateLocal = () => {
    let lang = localStorage.getItem('locale') === 'heb' ? 'eng' : 'heb';
    localStorage.setItem('locale', lang);
    setLocale(lang);
  };

  return (
    <Div>
      <ReactCountryFlag
        onClick={updateLocal}
        countryCode={locale === 'heb' ? 'US' : 'IL'}
        svg
        style={{
          cursor: 'pointer',
          width: '35px',
          height: '35px',
          borderRadius: '15px',
          margin: '0 10px 4px 10px ',
        }}
        title={locale === 'heb' ? 'IL' : 'US'}
      />
    </Div>
  );
};

const Div = styled.div`
  /* right: 50px;
  bottom: 5px;
  position: fixed;
  z-index: 100;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  border: none; */
`;
export default LocalFlagSwitcher;
