import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './App.css';

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        // Burada giriş işlemleri yapılır, başarılı olduğunda home sayfasına yönlendirilir.
        // Örneğin, şu anda sadece home sayfasına yönlendirme işlemi yapılıyor.
        navigate("/Dashboard");
      };
  return (
    // <div className="App">
    //   <div className="login-container">
    //     <h2 style={{ marginBottom: '32px', color: '#4299e1' }}>Login</h2>
    //     <form>
    //       <div className="form-input">
    //         <label htmlFor="username">Username:</label>
    //         <input type="text" id="username" name="username" />
    //       </div>
    //       <div className="form-input">
    //         <label htmlFor="password">Password:</label>
    //         <input type="password" id="password" name="password" />
    //       </div>
    //       <button type="submit" className="form-button">
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="App">
    <div className="login-container">
      <h2 style={{ marginBottom: '32px', color: '#4299e1' }}>Login</h2>
      <form>
        <div className="form-input">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <Link to="/ForgotPassword">Şifremi Unuttum</Link>
        <button type="submit" className="form-button"  onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  </div>
  );
}

export default Login;
