// app/render/page.jsx
// 
// from app/redux/counterSlice.js, render value in
// app/render/page.jsx

// app/render/page.jsx
"use client"
   import { useSelector } from 'react-redux';

const Render = () => {
  const count = useSelector((state) => state.counter.value); // Access the count state from the Redux store
  return (
    <div>

    <div>Render</div>
    <h1>Count: {count}</h1>
    </div>
    
  )
}

export default Render

