import { Button } from "@/components/ui/button";
import { Section } from "../_components/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

export function ContactSection({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const t = useTranslations("HomePage");

  return (
    <Section id={id} title={t("contact.title")} className={className}>
      <form className="max-w-md mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">{t("contact.name")}</label>
            <Input
              id="name"
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">{t("contact.email")}</label>
            <Input
              id="email"
              placeholder={t("contact.emailPlaceholder")}
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">{t("contact.message")}</label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder={t("contact.messagePlaceholder")}
              required
            />
          </div>
          <Button className="w-full" type="submit">
            {t("contact.sendMessage")}
          </Button>
        </div>
      </form>
    </Section>
  );
}
