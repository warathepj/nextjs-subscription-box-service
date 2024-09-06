// app/components/TestForm.jsx
//add input type text for interest in
//  app/components/TestForm.jsx
"use client"
function TestForm({ onSubmit }) { 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const interest = formData.get('interest'); // Get the interest value directly
    if (interest) {
      onSubmit([interest]); // Pass the interest as an array to match the expected format
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {/* ... your form elements for interests ... */}
      <label htmlFor="interest">Interest:</label>
      <input 
        className="bg-green-400"
        type="text" id="interest" name="interest" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;

