import { Section } from "../_components/section";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { StarIcon } from "lucide-react";

export function TestimonialsSection({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const t = useTranslations("HomePage");

  return (
    <Section id={id} title={t("testimonials.title")} className={className}>
      <div className="grid gap-6 lg:grid-cols-2">
        {[1, 2].map((testimonial) => (
          <TestimonialCard
            key={testimonial}
            rating={5}
            testimonial={t("testimonials.testimonial")}
            clientName={t("testimonials.clientName")}
            company={t("testimonials.company")}
            image="/placeholder.svg"
          />
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
