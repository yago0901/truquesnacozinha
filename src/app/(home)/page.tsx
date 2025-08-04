import Header from '@/components/Header';
import "../globals.css";
import EbookHero from '@/components/EbookHero';
import Problems from '@/components/Problems';
import EbookVolumes from '@/components/EbookVolumes';
import EbookTestimonials from '@/components/EbookTestimonials';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <EbookHero />
      <Problems />
      <EbookVolumes />
      <EbookTestimonials />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
