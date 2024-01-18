import React from 'react';
import './App.css';

function ForgotPassword() {
  return (
    <div className="App">
      <div className="password-reset-container">
        <h2 style={{ marginBottom: '32px', color: '#4299e1' }}>Şifremi Unuttum</h2>
        <form>
          <div className="form-input">
            <label htmlFor="email">E-posta Adresi:</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit" className="form-button">
            Şifreyi Sıfırla
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
