import Locale from "./Locale";
export { default as Locale } from "./Locale";

export const messages: { [name in Locale]: () => Promise<any> } = {
  [Locale.en_US]: () => import("./en-US"),
  [Locale.nl_NL]: () => import("./nl-NL")
};
