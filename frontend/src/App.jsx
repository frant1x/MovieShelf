import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="main-bg d-flex flex-column min-vh-100 text-white">
        <Header />
        <AuthModal />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
