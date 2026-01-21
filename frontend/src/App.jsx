import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import AuthModal from "./components/auth/AuthModal";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import ProfileOverview from "./pages/profile/ProfileOverview";

const App = () => {
  return (
    <Router>
      <div className="main-bg d-flex flex-column min-vh-100 text-white">
        <Header />
        <AuthModal />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}>
                <Route index element={<ProfileOverview />} />
                {/* <Route path="lists" element={<ProfileLists />} />
                <Route path="movies" element={<ProfileMovies />} />
                <Route path="reviews" element={<ProfileReviews />} />
                <Route path="settings" element={<ProfileSettings />} /> */}
              </Route>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
