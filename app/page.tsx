import Modalform from "@/components/Comman/Modalform";
import ContactBeforeDemo from "@/components/Landingpage/ContactBeforeDemo";
import DemoSection from "@/components/Landingpage/DemoSection";
import MainBanner from "@/components/Landingpage/MainBanner";
import RenewablesSection from "@/components/Landingpage/RenewablesSection";

export default function Home() {
  return (
    <>
      <MainBanner />
      <div className="w-full block xl:hidden ">
        <Modalform title="Demo Scheduling Form" />
      </div>
      <DemoSection />
      <RenewablesSection />
      <ContactBeforeDemo />
    </>
  );
}
