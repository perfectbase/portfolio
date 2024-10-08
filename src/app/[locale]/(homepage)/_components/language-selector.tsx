"use client";

import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { type Locale, usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { code: "en", name: "English", flag: "/img/flags/en.svg" },
  { code: "pt-BR", name: "Português", flag: "/img/flags/pt-BR.svg" },
  { code: "ja", name: "日本語", flag: "/img/flags/ja.svg" },
];

function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find(
    (language) => language.code === locale
  );

  return (
    <Select
      value={locale}
      onValueChange={(value: Locale) =>
        router.push(pathname, { locale: value })
      }
    >
      <SelectTrigger
        aria-label="Language selector"
        className="border-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent bg-transparent"
      >
        <div className="w-5 h-5 relative flex items-center justify-center">
          <Image
            src={currentLanguage?.flag || ""}
            alt={currentLanguage?.name || ""}
            width={20}
            height={20}
            className="shadow-sm shadow-black/30"
          />
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 relative flex items-center justify-center">
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={20}
                  className="shadow-sm shadow-black/30"
                />
              </div>
              {language.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { LanguageSelector };
