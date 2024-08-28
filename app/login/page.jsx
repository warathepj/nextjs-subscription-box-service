// app/login/page/
'use client';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const { email, password } = useSelector((state) => state.auth);
  const [emailForm, setEmailForm] =
 useState('user@email.abc');
  const [passwordForm, setPasswordForm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // let isLoggedin = useState(false);
  let loginWarning = useState(false);
  const handleSubmit = async (event) => {
  event.preventDefault();

  if (email === emailForm && password === passwordForm) {
    // Redirect to /profile 
    window.location.href = '/profile'; 
  } else {
    loginWarning = true;
    // Render "Invalid email or password" in a <pre> tag
    // You'll need a way to display this message in your component (e.g., using useState)
    // Here's a basic example:
    // setErrorMessage(<pre>Invalid email or password</pre>); 
  }
};


  return (
    <div>
      <h1>Login</h1>
      <pre>
        Email: {email}
        Password: {password}
      </pre>
{/* // in app/login/page/ initial hide 
<pre>Invalid email or password</pre> 
if loginWarning = true;
render <pre>Invalid email or password</pre> */}
      { loginWarning && <pre>Invalid email or password</pre> } 
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
    </div>
  );
}