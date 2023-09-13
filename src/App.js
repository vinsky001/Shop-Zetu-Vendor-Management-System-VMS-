import React from "react";

import "./App.css";

// Pages
import About from "./pages/About";
import Join_as_vendor from "./pages/Join-as-vendor";
import Pricing from "./pages/Pricing";

// Components
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Utilities
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header class="welcome d-flex flex-column">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/how-it-works" Component={HowItWorks} />
          <Route path="/about" Component={About} />
          <Route path="/join-as-vendor" Component={Join_as_vendor} />
          <Route path="/contact" Component={Contact} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
