import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = import.meta.env.VITE_NAS_USER || 'admin';
    const validPass = import.meta.env.VITE_NAS_PASS || 'admin';

    if (username === validUser && password === validPass) {
      localStorage.setItem('nas_auth', 'true');
      const from = (location.state as any)?.from?.pathname || '/nas';
      navigate(from, { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="page-content login-container">
        <h1 className="page-title">Restricted Access</h1>
        <p className="subtitle">Please sign in to access the NAS Dashboard.</p>
        
        <form onSubmit={handleLogin} className="card login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              autoComplete="current-password"
            />
          </div>
          {error && <p className="error-message" role="alert">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
