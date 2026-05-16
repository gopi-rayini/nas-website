import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Home from './pages/Home';
import NasDashboard from './pages/NasDashboard';
import Projects from './pages/Projects';
import Login from './pages/Login';
import './App.css';

// Simple ProtectedRoute component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('nas_auth') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="container">
        <BackgroundAnimation />
        <Navbar />
        <main className="main-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/nas" 
              element={
                <ProtectedRoute>
                  <NasDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Gopi Rayini. Built for performance.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
