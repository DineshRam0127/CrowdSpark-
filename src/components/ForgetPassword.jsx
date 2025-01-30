import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    setError('');
    setSuccess('');

    if (!newPassword || !confirmPassword) {
      setError('Both fields are required');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // For simplicity, let's assume the password is reset successfully
    // In real scenario, you would make a backend call to reset the password
    setSuccess('Password reset successfully');
    setTimeout(() => navigate('/'), 2000); // Redirect back to login after 2 seconds
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2 className="reset-title">Reset Password</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <div className="input-group">
          <label htmlFor="newPassword" className="reset-label">
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            className="reset-input"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" className="reset-label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="reset-input"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="reset-button" onClick={handlePasswordReset}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
