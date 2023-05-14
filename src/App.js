import "./App.css";
import Header from "./components/Header";
import ProductDirectory from "./pages/ProductDirectory";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<ProductDirectory />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="/:newsId" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
