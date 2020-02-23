import React, { useCallback, useContext, useEffect, useState } from "react";
import { IntlProvider, MessageDescriptor } from "react-intl";
import SplashScreen from "../../general/SplashScreen";
import { Context as StorageContext, StorageKey } from "../StorageManager";
import { messages } from "./data";
import Locale, { defaultLocale } from "./data/Locale";

type IntlManagerProps = {};
type IntlManagerContext = {
  locale?: Locale;
  messages?: MessageDescriptor;
  setLocale: (locale: Locale) => void;
};

type Messages = Record<string, string>;

export const Context = React.createContext<IntlManagerContext>({
  setLocale: () => {}
});

const IntlManager: React.FC<IntlManagerProps> = ({ children }) => {
  const storage = useContext(StorageContext);

  const [currentMessages, setCurrentMessages] = useState<Messages>({});

  useEffect(() => {
    const fetchMessages = async () => {
      const storedLocale = storage.getValue(StorageKey.Locale) as Locale;
      const navigatorLocale = navigator.language as Locale;

      const fetchMessagesFunc =
        messages[storedLocale] ||
        messages[navigatorLocale] ||
        messages[defaultLocale];

      setCurrentMessages((await fetchMessagesFunc()).default);
    };

    fetchMessages();
  }, [storage, setCurrentMessages]);

  const setLocale = useCallback(
    (locale: Locale) => storage.setValue(StorageKey.Locale, locale),
    [storage]
  );

  if (currentMessages == null) {
    return <SplashScreen />;
  }

  const locale = storage.getValue(StorageKey.Locale);

  return (
    <Context.Provider
      value={{
        locale,
        setLocale,
        messages: currentMessages
      }}
    >
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={currentMessages}
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default IntlManager;
