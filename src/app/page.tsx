import StatusBar from "@/components/StatusBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackageOfferTitle from "@/components/PackageOfferTitle";
import BookingForm from "@/components/BookingForm";
import PackageDetails from "@/components/PackageDetails";
import WhatsIncluded from "@/components/WhatsIncluded";
import WhatIsIndoorSkydiving from "@/components/WhatIsIndoorSkydiving";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import MoreReasons from "@/components/MoreReasons";
import FAQ from "@/components/FAQ";
import LocationFinder from "@/components/LocationFinder";
import TrustIndicators from "@/components/TrustIndicators";
import FooterCTA from "@/components/FooterCTA";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white">
      <StatusBar />
      <Header />
      <Hero />
      <div className="bg-ifly-navy md:pb-12">
        <div className="md:mx-auto md:max-w-6xl md:px-8 md:grid md:grid-cols-2 md:gap-10 md:items-center md:pt-8">
          <PackageOfferTitle />
          <BookingForm />
        </div>
      </div>
      <PackageDetails />
      <WhatsIncluded />
      <WhatIsIndoorSkydiving />
      <TrustBadges />
      <HowItWorks />
      <MoreReasons />
      <FAQ />
      <LocationFinder />
      <TrustIndicators />
      <FooterCTA />
    </div>
  );
}
