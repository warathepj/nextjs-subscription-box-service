"use client"
import React, { useState } from 'react';

const DynamicInterestForm = () => {
  const [interests, setInterests] = useState(['']);

  const addInterest = () => {
    setInterests([...interests, '']);
  };

  const handleInterestChange = (index, value) => {
    const newInterests = [...interests];
    newInterests[index] = value;
    setInterests(newInterests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(interests);
    // Here you would typically send the data to a server
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dynamic Interest Form</h1>
      <form onSubmit={handleSubmit}>
        {interests.map((interest, index) => (
          <div key={`interest-${index}`} className="mb-4">
            <input
              type="text"
              value={interest}
              onChange={(e) => handleInterestChange(index, e.target.value)}
              placeholder="Interest"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addInterest}
          className="mb-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Interest
        </button>
        <button
          type="submit"
          className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicInterestForm;