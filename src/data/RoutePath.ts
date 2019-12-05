enum RoutePath {
  // Content pages
  Home = "/",
  Content = "/:slug",
  All = "*",

  ArticleOverview = "/article",
  ArticleDetail = "/article/:slug",

  // QuickScan
  QuickScan = "/quick-scan",
  QuickScanOnboarding = "/quick-scan/onboarding",
  QuickScanQuestions = "/quick-scan/questions",
  QuickScanContactDetails = "/quick-scan/contact-details",
  QuickScanResult = "/quick-scan/result",
  QuickScanProfile = "/quick-scan-profile/:uuid",

  // Account
  Signin = "/signin",
  ForgetPassword = "/forget-password",

  // Profile
  Dashboard = "/dashboard",
  Settings = "/settings"
}

export default RoutePath;
