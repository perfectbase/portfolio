import { Link } from "@/i18n/routing";
import { useTranslations, useFormatter } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { LanguageSelector } from "../(homepage)/_components/language-selector";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("TermsOfService");
  const format = useFormatter();

  const termsOfServiceSections = t.raw("sections") as {
    title: string;
    content: string;
  }[];

  const effectiveDate = new Date("2024-09-10");
  const formattedEffectiveDate = format.dateTime(effectiveDate, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/" className="inline-block text-blue-600 hover:underline">
          &larr; {t("backToHome")}
        </Link>
        <div>
          <LanguageSelector />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {t("pageTitle")}
      </h1>

      <p className="text-sm text-gray-600 mb-4">
        {t("effectiveDate", { date: formattedEffectiveDate })}
      </p>

      <p className="text-base text-gray-700 mb-8">{t("welcomeMessage")}</p>

      {termsOfServiceSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {`${index + 1}. ${section.title}`}
          </h2>
          <div className="text-base text-gray-700">{section.content}</div>
        </div>
      ))}

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
}
