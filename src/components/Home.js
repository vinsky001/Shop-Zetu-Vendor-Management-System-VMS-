import Contact from "./Contact";
import FlexiblePricing from "./FlexiblePrices";
import HowItWorks from "./HowItWorks";
import Jumbotron from "./Jumbotron";
import PowerfulFeatures from "./PowerfulFeatures";
import WhatOurUsersSay from "./WhatOurUsersSay";

export default function Home() {
  return (
    <section>
      <Jumbotron />
      <PowerfulFeatures />
      <HowItWorks />
      <FlexiblePricing />
      <WhatOurUsersSay />
      <Contact />
    </section>
  );
}
