import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div
        style={{
          width: "80%",
          margin: "20px auto",
          border: "2px solid gray",
          minHeight: "300px",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;