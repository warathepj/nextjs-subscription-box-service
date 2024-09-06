"use client"
import React, { useState } from 'react';

const DynamicInterestForm = () => {
  const [interests, setInterests] = useState([{ name: '', fields: [{ key: '', value: '' }] }]);

  const addInterest = () => {
    setInterests([...interests, { name: '', fields: [{ key: '', value: '' }] }]);
  };

  const addField = (interestIndex) => {
    const newInterests = [...interests];
    newInterests[interestIndex].fields.push({ key: '', value: '' });
    setInterests(newInterests);
  };

  const handleInterestChange = (interestIndex, field, value) => {
    const newInterests = [...interests];
    newInterests[interestIndex][field] = value;
    setPets(newInterests);
  };

  const handleFieldChange = (interestIndex, fieldIndex, type, value) => {
    const newInterests = [...interests];
    newInterests[interestIndex].fields[fieldIndex][type] = value;
    setInterests(newInterests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(interests);
    // Here you would typically send the data to a server
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dynamic interest Form</h1>
      <form onSubmit={handleSubmit}>
        {interests.map((interest, interestIndex) => (
          <div key={interestIndex} className="mb-6 p-4 border border-gray-200 rounded">
            <input
              type="text"
              value={interest.name}
              onChange={(e) => handleInterestChange(interestIndex, 'name', e.target.value)}
              placeholder="Interest"
              className="w-full p-2 mb-2 border border-gray-300 rounded text-black"
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