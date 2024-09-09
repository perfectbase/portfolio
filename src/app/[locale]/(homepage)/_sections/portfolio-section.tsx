import { Button } from "@/components/ui/button";
import { Section } from "../_components/section";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeIcon from "@/components/icons/youtube-icon";
import Link from "next/link";
import { BriefcaseIcon, CloudIcon } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { constants } from "@/lib/constants";

export function PortfolioSection({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const t = useTranslations("HomePage");
  const format = useFormatter();

  const portfolioItems = [
    {
      title: t("portfolio.youtube.title"),
      description: t("portfolio.youtube.description", {
        youtubeSubscribers: format.number(constants.youtubeSubscribers),
      }),
      icon: YouTubeIcon,
      link: constants.links.youtube,
      buttonText: t("portfolio.youtube.visitChannel"),
    },
    {
      title: t("portfolio.edgestore.title"),
      description: t("portfolio.edgestore.description"),
      icon: CloudIcon,
      link: constants.links.edgestore,
      buttonText: t("portfolio.edgestore.visitWebsite"),
    },
    {
      title: t("portfolio.companyProjects.title"),
      description: t("portfolio.companyProjects.description"),
      icon: BriefcaseIcon,
    },
  ];

  return (
    <Section id={id} title={t("portfolio.title")} className={className}>
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {item.description}
              </p>
              {item.link && (
                <div>
                  <Button variant="outline" asChild>
                    <Link href={item.link}>{item.buttonText}</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
