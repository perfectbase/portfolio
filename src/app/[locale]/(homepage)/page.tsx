import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { SkillsSection } from "./_sections/skills-section";
import { PortfolioSection } from "./_sections/portfolio-section";
import { ContactSection } from "./_sections/contact-section";
import { ServicesSection } from "./_sections/services-section";
import { AboutSection } from "./_sections/about-section";
import GithubIcon from "@/components/icons/github-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import YouTubeIcon from "@/components/icons/youtube-icon";
import { constants } from "@/lib/constants";
import { Header } from "./_components/header";
import { unstable_setRequestLocale } from "next-intl/server";
import raviPic from "@/../public/img/ravi.webp";

export type Section = {
  id: string;
  navigation: string;
  component: React.FC<{ id: string; className?: string }>;
};

export default function PortfolioPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");

  const sections: Section[] = [
    {
      id: "about",
      navigation: t("navigation.about"),
      component: AboutSection,
    },
    {
      id: "portfolio",
      navigation: t("navigation.portfolio"),
      component: PortfolioSection,
    },
    {
      id: "skills",
      navigation: t("navigation.skills"),
      component: SkillsSection,
    },
    // {
    //   id: "testimonials",
    //   navigation: t("navigation.testimonials"),
    //   component: TestimonialsSection,
    // },
    {
      id: "services",
      navigation: t("navigation.services"),
      component: ServicesSection,
    },
    {
      id: "contact",
      navigation: t("navigation.contact"),
      component: ContactSection,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        sections={sections.map((section) => ({
          id: section.id,
          navigation: section.navigation,
        }))}
      />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-balance whitespace-pre-line">
                    {t("hero.subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[300px]:flex-row">
                  <Link href="#contact">
                    <Button>{t("hero.hireMe")}</Button>
                  </Link>
                  <Link href="#portfolio">
                    <Button variant="outline">{t("hero.viewPortfolio")}</Button>
                  </Link>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href={constants.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <GithubIcon className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href={constants.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <TwitterIcon className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link
                    href={constants.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <YouTubeIcon className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative max-w-60 md:max-w-80 aspect-square md:aspect-[3/4] mx-auto p-4 w-full order-first lg:order-last">
                <Image
                  src={raviPic}
                  className="rounded-full md:rounded-3xl shadow-lg shadow-black/40 object-cover lg:order-last"
                  alt="Ravi"
                  fill
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {sections.map((section, index) => (
          <section.component
            key={section.id}
            id={section.id}
            className={index % 2 === 0 ? "bg-muted" : ""}
          />
        ))}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">{t("footer.copyright")}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("footer.termsOfService")}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("footer.privacy")}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
