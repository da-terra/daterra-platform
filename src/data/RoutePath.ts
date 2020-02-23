const PublicRoute = {
  // Content pages
  Home: "/",
  Content: "/:slug",
  All: "*",

  ArticleOverview: "/article",
  ArticleDetail: "/article/:slug",
  EventOverview: "/event",
  EventDetail: "/event/:slug",

  // Quickscan
  Quickscan: "/quickscan",
  QuickscanOnboarding: "/quickscan/onboarding",
  QuickscanQuestions: "/quickscan/questions",
  QuickscanContactDetails: "/quickscan/contact-details",
  QuickscanResult: "/quickscan/result",
  QuickscanProfile: "/quickscan-profile/:uuid",

  // Dashboard
  Dashboard: "/dashboard",

  // Profile
  ProfileIndex: "/profile",
  Profile: "/profile/:id",
  ProfilePreference: "/profile/preferences",
  ProfileActivities: "/profile/activities",
  ProfileOrganizations: "/profile/organizations",

  //
  Projects: "/project",
  Project: "/project/:id",
  Organization: "/organization/:id",

  // Misc
  Signin: "/signin",
  Signout: "/signin",
  Activities: "/activities",

  CmsIndex: "/cms",
  Cms: {
    Articles: "/cms/article",
    Article: "/cms/article/:slug",
    Events: "/cms/event",
    Event: "/cms/event/:slug",
    Organizations: "/cms/organization",
    Organization: "/cms/organization/:id",
    Pages: "/cms/page",
    Page: "/cms/page/:slug",
    Projects: "/cms/project",
    Project: "/cms/project/:shortname",
    ProjectStates: "/cms/project-state",
    ProjectState: "/cms/project-state/:id",
    Users: "/cms/user",
    User: "/cms/user/:id",
    QuickscanQuestions: "/cms/quickscan-question",
    QuickscanQuestion: "/cms/quickscan-question/:id",
    QuickscanResults: "/cms/quickscan-result",
    QuickscanResult: "/cms/quickscan-result/:id"
  }
};

export default PublicRoute;
