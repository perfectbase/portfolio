import { Section } from "../_components/section";
import { useFormatter, useTranslations } from "next-intl";
import { constants } from "@/lib/constants";

export function AboutSection({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const t = useTranslations("HomePage");
  const format = useFormatter();

  return (
    <Section id={id} title={t("about.title")} className={className}>
      <div className="whitespace-pre-wrap max-w-prose">
        {t.rich("about.description", {
          years: constants.yearsWorkingInJapan,
          subscribers: format.number(constants.youtubeSubscribers),
        })}
      </div>
    </Section>
  );
}
