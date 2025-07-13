import { MainLayout } from '@/components/layouts/MainLayout';
import { HeroSection } from '@/components/ui/HeroSection';
import { ServicesOverview } from '@/components/ui/ServicesOverview';
import { TestimonialsCarousel } from '@/components/ui/TestimonialsCarousel';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { QuickQuoteForm } from '@/components/forms/QuickQuoteForm';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsCarousel />
      <TrustBadges />
      <QuickQuoteForm />
    </MainLayout>
  );
}
