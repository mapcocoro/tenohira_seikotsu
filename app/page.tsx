import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TreatmentSection from '@/components/TreatmentSection';
import PriceSection from '@/components/PriceSection';
import AccessSection from '@/components/AccessSection';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <TreatmentSection />
        <div className="section-divider" />
        <PriceSection />
        <div className="section-divider" />
        <AccessSection />
        <div className="section-divider" />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
