// app/profile/page.jsx
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector  } from 'react-redux';
import { updateProfile } from '../redux/profileSlice';
import { addInterests } from '../redux/interestsSlice';

import { setInterests } from '../redux/interestsSlice';
import { useRouter } from 'next/navigation';
import TestForm from '../components/TestForm';


function Profile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const interests = useSelector((state) => state.interests);
  
  //how to state app/profile/page.jsx/
  // const [interests, setInterests] = useState([]);
  // to /app/redux
// //   const [hobbies, setHobbies] = useState([]);


  const dispatch = useDispatch();
  const router = useRouter();
/////////////

  const handleInterestsUpdate = (newInterests) => {
    dispatch(addInterests(newInterests)); // Dispatch the Redux action to update the state
  // setInterests((prevInterests) => [...prevInterests, ...newInterests]);

  };

    // Log interests whenever it changes
    useEffect(() => {
      console.log("Updated Interests:", interests);
    }, [interests]);

  const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateProfile({ name, age }));
        router.push('/subscription-plans');
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className='bg-red-400'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            className='bg-red-400'
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        {/* //from app/profile/page.jsx */}
        {/* <TestForm/> */}
        {/* render interest in app/profile/page.jsx */}

       

        <button type="submit">Submit</button>
      </form>

      <TestForm onSubmit={handleInterestsUpdate} />
      <h2>Interests:</h2>
      <ul>
      {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default Profile;



// // import DynamicInterestForm from '../components/DynamicInterestForm';
// // import DynamicPetForm from '../components/DynamicPetForm';

// // const Profile = () => {

// .............

// //   return (
// //     <div>
// //       <h1>Profile</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="name">Name:</label>
// //           <input
// //             type="text"
// //             id="name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className='bg-red-500'
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="age">Age:</label>
// //           <input
// //             type="number"

// //             id="age"
// //             value={age}
// //             onChange={(e) => setAge(e.target.value)}
// //             className='bg-red-500'
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="name">Interests:</label>
          
// //         </div>

// //         <DynamicInterestForm/>
// // {/* //add next Link to app/profile/page/ */}
// // <Link href="/subscription-plans">
// //         <button type="submit">Submit</button>
// //         </Link>
// //         {/* href to /subscription-plans */}
// //         <pre>Name: {name}</pre>
// //         <pre>Age: {age}</pre>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;
