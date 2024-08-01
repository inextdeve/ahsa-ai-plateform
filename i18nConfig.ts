/*
    set up next-i18n-router.

    next-i18n-router will prefix all of our paths with the current locale, except for our default locale which will still be available at the base path with no prefix.

    For example, if I have a page at /about , the paths would appear like so:

    English: example.com/about

    Arabic: example.com/ar/about

*/

export const locales = ["en", "ar"] as const;

const i18nConfig = {
  locales: locales,
  defaultLocale: "en",
};

export type Locale = (typeof locales)[number];

export type Namespaces = ("common" | "sidebar")[];

export const i18nNamespaces: Namespaces = ["common", "sidebar"];

export default i18nConfig;
