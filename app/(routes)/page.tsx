import { AccordionDemo } from "@/components/accordian";
import Feature1 from "@/components/auto-on-of";
import Banner from "@/components/banner";
import ContactUs from "@/components/contact-us";
import Feature2 from "@/components/remote_bill";
import SafePump from "@/components/safe-pump";
import TankApp from "@/components/tank-app";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Feature1 />
      <Feature2 />
      <SafePump />
      <TankApp />
      <AccordionDemo />
      <ContactUs />
    </main>
  );
}
