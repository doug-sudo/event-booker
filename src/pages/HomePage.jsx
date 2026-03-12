import HeroSection from '../components/home/HeroSection'
import MetricsCards from '../components/home/MetricsCards'
import PartnerLogos from '../components/home/PartnerLogos'
import TestimonialCards from '../components/home/TestimonialCards'
import BottomCTA from '../components/home/BottomCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsCards />
      <PartnerLogos />
      <TestimonialCards />
      <BottomCTA />
    </>
  )
}
