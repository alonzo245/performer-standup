import React, { useContext, useState } from 'react';
import { translationsConfig } from '../config/localTraslation';

const localeStateContext = React.createContext<{
  locale: string;
  translations: any;
  setLocale: (val: string) => void;
}>({
  locale: localStorage.getItem('locale') || 'heb',
  translations: translationsConfig[localStorage.getItem('locale') || 'heb'],
  setLocale: (val) => {},
});

const useLocalizationState = () => useContext(localeStateContext);

const initialLocale = localStorage.getItem('locale') || 'heb';
const initialTranslations = translationsConfig[localStorage.getItem('locale') || 'heb'];

const { Provider } = localeStateContext;
const LocalizationStateProvider = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) => {
  const [locale, setLocaleState] = useState<any>(initialLocale);
  const [translations, setTranslations] = useState<any>(initialTranslations);

  const setLocale = (locale: string) => {
    if (locale && translationsConfig?.[locale]) {
      setLocaleState(locale);
      setTranslations(translationsConfig[locale]);
    }
  };
  return <Provider value={{ locale, setLocale, translations }}>{children}</Provider>;
};

export { LocalizationStateProvider, useLocalizationState };
