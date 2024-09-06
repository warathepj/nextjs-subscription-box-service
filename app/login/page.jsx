'use client';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const { email, password } = useSelector((state) => state.auth);
  const [emailForm, setEmailForm] = useState('user@email.abc');
  const [passwordForm, setPasswordForm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === emailForm && password === passwordForm) {
      window.location.href = '/profile';
    } else {
      setErrorMessage('Invalid email or password');
    }
  };
  
  return (
    <div>
      <h1>Login</h1>
      <pre>
        Email: {email}
        Password: {password}
      </pre>
      <Link href="/">
        <button>Back to Register</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className='bg-green-900'
            type="email"
            id="email"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className='bg-green-900'
            type="password"
            id="password"
            value={passwordForm}
            onChange={(e) => setPasswordForm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <pre>{errorMessage}</pre>}
    </div>
  );
}