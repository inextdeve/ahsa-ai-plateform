import { Locale, locales } from "../../i18nConfig";

export function routesWithLocales(protectedPaths: string[], locales: Locale[]) {
  let protectedPathsWithLocale = [...protectedPaths];

  protectedPaths.forEach((route) => {
    locales.forEach(
      (locale) =>
        (protectedPathsWithLocale = [
          ...protectedPathsWithLocale,
          `/${locale}${route}`,
        ])
    );
  });

  return protectedPathsWithLocale;
}

export function pathCheck(pathToCheck: string, pathname: string) {
  return routesWithLocales([pathToCheck], locales).includes(pathname);
}
