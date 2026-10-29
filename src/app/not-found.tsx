import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="eyebrow justify-center">Error 404</p>
      <h1 className="mt-4 text-5xl font-extrabold">Page not <span className="text-gradient">found</span></h1>
      <p className="mt-4 text-lg text-muted">The page you are looking for has moved or does not exist.</p>
      <Button href="/" className="mt-8">Back to home</Button>
    </section>
  );
}
