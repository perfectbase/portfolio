"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Section } from "../_components/section";
import { useTranslations } from "next-intl";

type Skill = {
  name: string;
  categories: string[];
};

const skills: Skill[] = [
  { name: "JavaScript", categories: ["frontend", "backend"] },
  { name: "TypeScript", categories: ["frontend", "backend"] },
  { name: "CSS", categories: ["frontend"] },
  { name: "HTML", categories: ["frontend"] },
  { name: "Node.js", categories: ["frontend", "backend"] },
  { name: "Tailwind CSS", categories: ["frontend"] },
  { name: "Shadcn/UI", categories: ["frontend"] },
  { name: "React", categories: ["frontend"] },
  { name: "Next.js", categories: ["frontend", "backend"] },
  { name: "Express", categories: ["backend"] },
  { name: "Webpack", categories: ["frontend"] },
  { name: "Esbuild", categories: ["frontend"] },
  { name: "Serverless Framework", categories: ["backend", "cloud-infra"] },
  { name: "SST", categories: ["backend", "cloud-infra"] },
  { name: "MySQL", categories: ["backend"] },
  { name: "Elasticsearch", categories: ["backend", "analytics"] },
  { name: "Redis", categories: ["backend"] },
  { name: "PlanetScale", categories: ["cloud-infra"] },
  { name: "Clerk", categories: ["backend", "cloud-infra"] },
  { name: "Vercel", categories: ["ci-cd", "cloud-infra"] },
  { name: "Docker", categories: ["ci-cd", "backend", "cloud-infra"] },
  { name: "AWS Cognito", categories: ["backend", "cloud-infra"] },
  { name: "AWS Lambda", categories: ["backend", "cloud-infra"] },
  { name: "AWS API Gateway", categories: ["backend", "cloud-infra"] },
  { name: "AWS S3", categories: ["backend", "cloud-infra"] },
  { name: "AWS Route 53", categories: ["cloud-infra"] },
  { name: "AWS CloudFront", categories: ["cloud-infra"] },
  { name: "AWS DynamoDB", categories: ["backend", "cloud-infra"] },
  { name: "AWS RDS", categories: ["cloud-infra"] },
  { name: "AWS SES", categories: ["cloud-infra"] },
  { name: "AWS SQS", categories: ["cloud-infra"] },
  { name: "AWS ECS", categories: ["cloud-infra"] },
  { name: "AWS Fargate", categories: ["cloud-infra"] },
  { name: "AWS Rekognition", categories: ["cloud-infra"] },
  { name: "AWS Lambda@Edge", categories: ["cloud-infra"] },
  { name: "AWS Step Functions", categories: ["cloud-infra"] },
  { name: "AWS CodeBuild", categories: ["ci-cd"] },
  { name: "AWS QuickSight", categories: ["analytics"] },
  { name: "AWS IAM", categories: ["cloud-infra"] },
  { name: "AWS VPC", categories: ["cloud-infra"] },
  { name: "AWS EC2", categories: ["cloud-infra"] },
  { name: "AWS SSM", categories: ["cloud-infra"] },
  { name: "AWS CloudFormation", categories: ["cloud-infra"] },
  { name: "AWS CDK", categories: ["cloud-infra"] },
  { name: "Jenkins", categories: ["ci-cd"] },
  { name: "GitHub Actions", categories: ["ci-cd"] },
  { name: "Metabase", categories: ["analytics"] },
  { name: "Google analytics", categories: ["analytics"] },
  { name: "SendGrid", categories: ["cloud-infra"] },
  { name: "Postmark", categories: ["cloud-infra"] },
  { name: "Resend", categories: ["cloud-infra"] },
];

const categories = Array.from(
  new Set(skills.flatMap((skill) => skill.categories))
);

export function SkillsSection({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const t = useTranslations("HomePage");

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeFilter));

  return (
    <Section id={id} title={t("skills.title")} className={className}>
      <div className="mb-8 flex flex-wrap gap-2 max-w-2xl">
        <Button
          variant={activeFilter === "All" ? "default" : "outline"}
          onClick={() => setActiveFilter("All")}
        >
          {t("skills.categories.all")}
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => setActiveFilter(category)}
          >
            {t(`skills.categories.${category}`)}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 max-w-2xl">
        {filteredSkills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </Section>
  );
}
