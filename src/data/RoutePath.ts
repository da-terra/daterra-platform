enum RoutePath {
  // Content pages
  Home = "/",
  Content = "/:slug",
  All = "*",

  ArticleOverview = "/article",
  ArticleDetail = "/article/:slug",

  // QuickScan
  QuickScan = "/quickscan",
  QuickScanOnboarding = "/quickscan/onboarding",
  QuickScanQuestions = "/quickscan/questions",
  QuickScanContactDetails = "/quickscan/contact-details",
  QuickScanResult = "/quickscan/result",
  QuickScanProfile = "/quickscan-profile/:uuid",

  // Account
  Signin = "/signin",
  ForgetPassword = "/forget-password",

  // Profile
  Dashboard = "/dashboard",
  Settings = "/settings"
}

export default RoutePath;
