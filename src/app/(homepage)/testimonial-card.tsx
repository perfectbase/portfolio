import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard(props: {
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
