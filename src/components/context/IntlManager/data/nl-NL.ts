export default {
  PersonalStatistics_title: "Hey, {givenName}",
  PersonalStatistics_message:
    "Je hebt {count, plural, =0 {nog geen projecten afgerond} one {één project afgerond} other {{count} projecten afgerond}}",
  PersonalStatistics_carouselTitle: "Afgeronde projecten",

  // NotificationButton
  NotificationButton_dropdownTitle: "Je hebt geen notificaties",

  // UserButton
  UserButton_myProfile: "Mijn profiel",
  UserButton_myPreferences: "Mijn voorkeuren",
  UserButton_signOut: "Uitloggen",

  // Profile
  Profile_activityHistory: "Actie geschiedenis",
  Profile_organizations: "Organisaties",
  Profile_preferences: "Voorkeuren",
  Profile_deleteAccount: "Verwijder account",

  // Profile Preferences
  ProfilePreferences_title: "Voorkeuren",
  ProfilePreferences_themeInputLabel: "Thema",
  ProfilePreferences_themeInputValue:
    "{themeName, select, defaultlight {Licht} defaultdark {Donker}}",
  ProfilePreferences_localeInputLabel: "Taal",
  ProfilePreferences_localeInputValue:
    "{ locale, select, enUS {Engels (US)} nlNL {Nederlands}}",

  // NewProjectCard
  NewProjectCard_durationTitle: "Looptijd",
  NewProjectCard_duration: "{startDate} t/m {endDate}",
  NewProjectCard_registrations:
    "{n, plural, =0 {Geen aanmeldingen} one {{n} Aanmelding} other {{n} Aanmeldingen}}"
} as any;
