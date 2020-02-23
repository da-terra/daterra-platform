import React, { useCallback, useContext } from "react";
import { FormattedMessage } from "react-intl";
import {
  Context as IntlContext,
  messages
} from "../../../../context/IntlManager";
import {
  Context as ThemeContext,
  themes
} from "../../../../context/ThemeManager";
import { HeadingType } from "../../../../general/Heading";
import {
  Option,
  PreferencesGroup,
  PreferencesLabel,
  PreferencesSelect,
  StyledHeading,
  Wrapper
} from "./styled";

type ProfilePreferencesProps = {
  className?: string;
};

const ProfilePreferences: React.FC<ProfilePreferencesProps> = ({
  className
}) => {
  const themeContext = useContext(ThemeContext);
  const intlContext = useContext(IntlContext);

  const themeOptions = Object.keys(themes);
  const localeOptions = Object.keys(messages);

  const handleThemeChange = useCallback(
    event => themeContext.setTheme(event.currentTarget.value),
    [themeContext]
  );

  const handleLocaleChange = useCallback(
    event => intlContext.setLocale(event.currentTarget.value),
    [intlContext]
  );

  return (
    <Wrapper className={className}>
      <StyledHeading headingType={HeadingType.Tertiary} serif>
        <FormattedMessage id="ProfilePreferences_title" />
      </StyledHeading>

      <PreferencesGroup>
        <PreferencesLabel as="label">
          <FormattedMessage id="ProfilePreferences_themeInputLabel" />
        </PreferencesLabel>

        <PreferencesSelect
          defaultValue={themeContext.themeName}
          onChange={handleThemeChange}
        >
          {themeOptions.map(themeName => (
            <FormattedMessage
              id="ProfilePreferences_themeInputValue"
              key={themeName}
              values={{ themeName: themeName.replace("-", "") }}
            >
              {message => <Option value={themeName}>{message}</Option>}
            </FormattedMessage>
          ))}
        </PreferencesSelect>
      </PreferencesGroup>

      <PreferencesGroup>
        <PreferencesLabel as="label">
          <FormattedMessage id="ProfilePreferences_localeInputLabel" />
        </PreferencesLabel>

        <PreferencesSelect
          defaultValue={intlContext.locale}
          onChange={handleLocaleChange}
        >
          {localeOptions.map(locale => (
            <FormattedMessage
              id="ProfilePreferences_localeInputValue"
              key={locale}
              values={{ locale: locale.replace("-", "") }}
            >
              {message => <Option value={locale}>{message}</Option>}
            </FormattedMessage>
          ))}
        </PreferencesSelect>
      </PreferencesGroup>
    </Wrapper>
  );
};

export default ProfilePreferences;
