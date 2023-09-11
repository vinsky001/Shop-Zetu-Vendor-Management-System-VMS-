import "./App.css";

import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./components/Contact";
import Join_as_vendor from "./pages/Join-as-vendor";

// Components
import PowerfulFeatures from "./components/PowerfulFeatures";
import WhatOurUsersSay from "./components/WhatOurUsersSay";
import FlexiblePricing from "./components/FlexiblePrices";
import HowItWorks from "./components/HowItWorks";

// Utilities
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";

function App() {
  // return (
  //   <div className="App">
  //     <main class="container-fluid main px-0">
  //       
  //       <PowerfulFeatures />
  //       <HowItWorks />
  //       <WhatOurUsersSay />
  //       <FlexiblePricing />
  //       <Contact />
  //     </main>
  //   </div>
  // );
  return (
    <div>
      <section class="welcome d-flex flex-column">
        <Header />
      </section>
      <Routes>
        <Route path="/" Component={PowerfulFeatures} />
        <Route path="/how-it-works" Component={HowItWorks} />
        <Route path="/about" Component={About} />
        <Route path="/join-as-vendor" Component={Join_as_vendor} />
        <Route path="/contact" Component={Contact} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="*" Component={PowerfulFeatures} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App;
