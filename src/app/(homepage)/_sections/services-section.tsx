import { Section } from "../_components/section";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  GitBranchIcon,
  HeadsetIcon,
  LayoutTemplateIcon,
  LineChartIcon,
  RocketIcon,
  StarIcon,
  ZapIcon,
} from "lucide-react";

export function ServicesSection({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const t = useTranslations("HomePage");

  const services = [
    {
      icon: RocketIcon,
      title: t("services.newProjectSetup.title"),
      description: t("services.newProjectSetup.description"),
    },
    {
      icon: HeadsetIcon,
      title: t("services.technicalConsulting.title"),
      description: t("services.technicalConsulting.description"),
    },
    {
      icon: LayoutTemplateIcon,
      title: t("services.webDevelopment.title"),
      description: t("services.webDevelopment.description"),
    },
    {
      icon: LineChartIcon,
      title: t("services.analyticsSetup.title"),
      description: t("services.analyticsSetup.description"),
    },
    {
      icon: GitBranchIcon,
      title: t("services.ciCdSetup.title"),
      description: t("services.ciCdSetup.description"),
    },
    {
      icon: ZapIcon,
      title: t("services.performanceOptimization.title"),
      description: t("services.performanceOptimization.description"),
    },
  ];

  return (
    <Section id={id} title={t("services.title")} className={className}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard(props: {
  rating: number;
  testimonial: string;
  clientName: string;
  company: string;
  image: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <StarRating rating={props.rating} />
        </div>
        <p className="text-muted-foreground mb-4">{props.testimonial}</p>
        <div className="flex items-center">
          <Image
            alt={`Client ${props.clientName}`}
            className="rounded-full mr-4"
            height="40"
            src={props.image}
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div>
            <p className="font-semibold">{props.clientName}</p>
            <p className="text-sm text-muted-foreground">{props.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, index) => (
        <StarIcon key={index} className="text-yellow-500" fill="currentColor" />
      ))}
    </div>
  );
}
