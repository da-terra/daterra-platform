enum RoutePath {
  // Content pages
  Home = "/",
  Content = "/:page",
  All = "*",

  // QuickScan
  QuickScan = "/quick-scan",
  QuickScanOnboarding = "/quick-scan/onboarding",
  QuickScanQuestions = "/quick-scan/questions",
  QuickScanContactDetails = "/quick-scan/contact-details",
  QuickScanResult = "/quick-scan/result",

  // Account
  Signin = "/signin",
  ForgetPassword = "/forget-password",

  // Profile
  Dashboard = "/dashboard",
  Settings = "/settings"
}

export default RoutePath;
