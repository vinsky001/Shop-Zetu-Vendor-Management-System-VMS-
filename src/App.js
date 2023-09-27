import React from "react";

import "./App.css";

// Pages
import Pricing from "./pages/Pricing";

// Components
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SubmitSuccess from "./components/SubmitSuccess";

// Utilities
import { Route, Routes } from "react-router-dom";
import SubmitFailed from "./components/SubmitFailed";

function App() {
  return (
    <div>
      <header className="welcome d-flex flex-column">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/how-it-works" Component={HowItWorks} />
          <Route path="/contact" Component={Contact} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="*" Component={NotFound} />
          <Route path="/success" Component={SubmitSuccess} />
          <Route path="/error" Component={SubmitFailed} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
