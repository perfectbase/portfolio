import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useFormatter, useTranslations } from "next-intl";
import { LanguageSelector } from "./language-selector";

export default function PortfolioPage() {
  const t = useTranslations("HomePage");
  const format = useFormatter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <nav className="mx-auto flex gap-2">
            <Link href="#about">
              <Button variant="ghost" className="text-sm font-medium">
                {t("navigation.about")}
              </Button>
            </Link>
            <Link href="#skills">
              <Button variant="ghost" className="text-sm font-medium">
                {t("navigation.skills")}
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="ghost" className="text-sm font-medium">
                {t("navigation.projects")}
              </Button>
            </Link>
            <Link href="#testimonials">
              <Button variant="ghost" className="text-sm font-medium">
                {t("navigation.testimonials")}
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="ghost" className="text-sm font-medium">
                {t("navigation.contact")}
              </Button>
            </Link>
            <LanguageSelector />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t("hero.subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button>{t("hero.hireMe")}</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline">{t("hero.viewProjects")}</Button>
                  </Link>
                </div>
              </div>
              <Image
                alt="Hero"
                className="mx-auto overflow-hidden rounded-full border-4 border-purple-300 shadow-lg object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/img/ravi.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 whitespace-pre-line text-balance">
              {t.rich("about.description", {
                years: "7",
                subscribers: format.number(10000),
                edgestore: (children) => (
                  <Link
                    href="https://edgestore.dev"
                    target="_blank"
                    className="underline font-medium"
                  >
                    {children}
                  </Link>
                ),
                youtube: (children) => (
                  <Link
                    href="https://www.youtube.com/@perfectbase"
                    target="_blank"
                    className="underline font-medium"
                  >
                    {children}
                  </Link>
                ),
              })}
            </p>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              {t("skills.title")}
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("skills.frontend.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("skills.frontend.description")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("skills.backend.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("skills.backend.description")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {t("skills.devops.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("skills.devops.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              {t("projects.title")}
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {[1, 2, 3, 4].map((project) => (
                <Card key={project}>
                  <CardContent className="p-6">
                    <Image
                      alt={`Project ${project}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      height="200"
                      src="/placeholder.svg"
                      width="400"
                    />
                    <h3 className="text-2xl font-bold mb-2">
                      {t("projects.projectTitle", { number: project })}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t("projects.projectDescription", { number: project })}
                    </p>
                    <Button variant="outline">
                      {t("projects.viewProject")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              {t("testimonials.title")}
            </h2>
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
          </div>
        </section> */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              {t("contact.title")}
            </h2>
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
          </div>
        </section>
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
