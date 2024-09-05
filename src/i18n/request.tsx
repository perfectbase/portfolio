import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const headersList = headers();

  // Try to get locale from cookies first
  let locale = cookieStore.get("NEXT_LOCALE")?.value;

  // If not in cookies, try to get from Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get("Accept-Language");
    locale = acceptLanguage ? acceptLanguage.split(",")[0].split("-")[0] : "en";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
