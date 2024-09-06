// app/subscription-plans/page.jsx/
"use client"
import { useSelector } from 'react-redux';

const SubscriptionPlans = () => {
  const profile = useSelector((state) => state.profile);
  const interests = useSelector((state) => state.interests.value);
  
  //from app/subscription-plans/page.jsx/
  console.log("IIIIIIIIIIIinterests: ", interests)
// why log is empty array

//in app/subscription-plans/page.jsx/
// how to render interests in pre tag
  
  return (
    <div>
      <h1>Subscription Plans</h1>
      <pre>
        Name: {profile.name}
        Age: {profile.age}
      </pre>
    </div>
  );
};

export default SubscriptionPlans;




// // app/subscription-plans/page.jsx/
// //how to render name and age from app/redux/profileSlice.js
// "use client"
// import { useSelector } from 'react-redux';

// const SubscriptionPlans = () => {
//   const profile = useSelector((state) => state.profile);
//   console.log("profile: ", profile)
//   return (
//     <div>SubscriptionPlans
// {/* //in app/subscription-plans/page.jsx/ 
// why not render*/}
//       <pre>
//       Name: {profile.name}
//       Age: {profile.age}
//     </pre>
//     {/* reference app/redux/profileSlice.js */}
//     </div>
//   )
// }

// export default SubscriptionPlans