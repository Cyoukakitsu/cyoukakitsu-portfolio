// i18n stub — Japanese is default
// All strings are currently inline in portfolio.js.
// When internationalizing, extract strings to ja.js / zh.js / en.js
// and use this module to switch locales.

export const locale = "ja";

export function getLocale() {
  return localStorage.getItem("locale") || "ja";
}
