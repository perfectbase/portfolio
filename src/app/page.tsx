import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Ravi</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contact
            </Link>
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
                    Ravi
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Web Developer & Consultant. Transforming ideas into powerful
                    digital solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button>Hire Me</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline">View Projects</Button>
                  </Link>
                </div>
              </div>
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              Skills
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Backend Development
                  </h3>
                  <p className="text-muted-foreground">
                    Node.js, Express, PostgreSQL, MongoDB
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">DevOps & Cloud</h3>
                  <p className="text-muted-foreground">
                    Docker, AWS, CI/CD, Vercel
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              Projects
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
                      Project {project}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Description of project {project}. Explain the challenge,
                      solution, and results.
                    </p>
                    <Button variant="outline">View Project</Button>
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
              Testimonials
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {[1, 2].map((testimonial) => (
                <Card key={testimonial}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <StarRating rating={5} />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua."
                    </p>
                    <div className="flex items-center">
                      <Image
                        alt={`Client ${testimonial}`}
                        className="rounded-full mr-4"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="font-semibold">Client Name</p>
                        <p className="text-sm text-muted-foreground">Company</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              Contact Me
            </h2>
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    placeholder="Your email"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    className="min-h-[100px]"
                    id="message"
                    placeholder="Your message"
                    required
                  />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 Perfect Base. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
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
