enum RoutePath {
  // Content pages
  Home = "/",
  Content = "/:page",
  All = "*",

  // Account
  Signin = "/signin",
  ForgetPassword = "/forget-password",

  // Profile
  Dashboard = "/dashboard",
  Settings = "/settings"
}

export default RoutePath;
