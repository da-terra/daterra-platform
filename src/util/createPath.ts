import RoutePath from "../data/RoutePath";

const createPath = (route: RoutePath, parameters: { [name: string]: string }) =>
  route.replace(
    /:[a-z]+/gi,
    parameterKey => parameters[parameterKey.substr(1)]
  );

export default createPath;
