import "./App.css";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import PowerfulFeatures from "./components/PowerfulFeatures";
import HowItWorks from "./components/HowItWorks";
import WhatOurUsersSay from "./components/WhatOurUsersSay";
import FlexiblePricing from "./components/FlexiblePrices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main class="container-fluid main px-0">
        <section class="welcome d-flex flex-column">
          <Header />
          <Jumbotron />
        </section>
        <PowerfulFeatures />
        <HowItWorks />
        <WhatOurUsersSay />
        <FlexiblePricing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
