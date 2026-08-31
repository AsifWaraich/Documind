import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { About } from "@/components/landing/about";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { ContactCta } from "@/components/landing/contact-cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
	<>
	  <main>
		<Hero />
		<HowItWorks />
		<Features />
		<About />
		<Testimonials />
		<Pricing />
		<Faq />
		<ContactCta />
	  </main>
	  <Footer />
	</>
  );
}
