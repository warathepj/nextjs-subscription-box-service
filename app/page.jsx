// app/page.jsx/
// in app/page.jsx/, when press register state 
// email and password to redux
'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setEmail, setPassword } from './redux/authSlice';


import Link from 'next/link';
import Counter from './components/Counter';

export default function Register() {
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    router.push('/login');
  };

  return (
    <>
      <div>
        <h1>Home</h1>
        <Link href="/render">
          <p>Go to Render</p>
        </Link>
        <Counter />
      </div>

      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmailState(e.target.value)}
              required
              className='bg-red-500'
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"

              id="password"
              value={password}
              onChange={(e) => setPasswordState(e.target.value)}
              required
              className='bg-red-500'

            />
          </div>

            <button type="submit">Register</button> {/* Change to type="button" */}
        </form>
      </div>
    </>
  );
}