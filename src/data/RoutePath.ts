enum RoutePath {

  // Content pages
  ContentPage = "/:page",
  All = "*",

  ForBusiness = "/business",
  ForStudents = "/students",
  ForExperts = "/data-scientists",

  // Account
  Signin = "/signin",
  ForgetPassword = "/forget-password",

  // Profile
  Settings = "/settings"
}

export default RoutePath;
