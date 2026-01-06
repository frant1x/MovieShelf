import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import AuthModal from './components/AuthModal';


const App = () => {
  
  return (
    <Router>
      <Header />
      <AuthModal />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
