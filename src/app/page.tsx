import { MainLayout } from '@/components/layouts/MainLayout';
import { HeroSection } from '@/components/ui/HeroSection';
import { ServicesOverview } from '@/components/ui/ServicesOverview';
import { TestimonialsCarousel } from '@/components/ui/TestimonialsCarousel';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { BeforeAfterGallery } from '@/components/ui/BeforeAfterGallery';
import { ServiceAreaMap } from '@/components/ui/ServiceAreaMap';
import { QuickQuoteForm } from '@/components/forms/QuickQuoteForm';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsCarousel />
      <BeforeAfterGallery />
      <TrustBadges />
      <ServiceAreaMap />
      <QuickQuoteForm />
    </MainLayout>
  );
}
