import { Role } from "@data-science-platform/shared";

export default {
  PersonalStatistics_title: "Hi, {givenName}",
  PersonalStatistics_message:
    "You {count, plural, =0 {have not finished any projects yet} one {finished one project} other {finished {count} projects}}",
  PersonalStatistics_carouselTitle: "Finished projects",

  // NotificationButton
  NotificationButton_dropdownTitle: "You don't have any notifications",

  // UserButton
  UserButton_myProfile: "My profile",
  UserButton_myPreferences: "My preferences",
  UserButton_signOut: "Sign out",

  // Profile
  Profile_activityHistory: "Activities",
  Profile_organizations: "Organizations",
  Profile_preferences: "Preferences",
  Profile_deleteAccount: "Delete account",

  // Profile Preferences
  ProfilePreferences_title: "Settings",
  ProfilePreferences_themeInputLabel: "Theme",
  ProfilePreferences_themeInputValue:
    "{themeName, select, defaultlight {Light} defaultdark {Dark}}",
  ProfilePreferences_localeInputLabel: "Language",
  ProfilePreferences_localeInputValue:
    "{locale, select, enUS {English (US)} nlNL {Dutch}}",

  // NewProjectCard
  NewProjectCard_durationTitle: "Duration",
  NewProjectCard_duration: "{startDate} up to and including {endDate}",
  NewProjectCard_registrations:
    "{n, plural, =0 {No registrations} one {{n} Registration} other {{n} Registrations}}",

  // RoleTag
  RoleTag_role: `{
    role, select,
      ${Role.Admin} {Admin}
      ${Role.Company} {Company}
      ${Role.ContentEditor} {Content Editor}
      ${Role.Expert} {Data Science Professional}
      ${Role.Student} {Data Science Student}
      ${Role.Team} {Data Science Team}
      other {Unknown}
    }`
} as any;
