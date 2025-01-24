import { useState } from "react";

const Page1 = () => {
  const [birthYear, setBirthYear] = useState("");

  const handleInputChange = (e) => {
    setBirthYear(e.target.value);
  };

  const handleSubmit = () => {
    if (!/^\d{4}$/.test(birthYear)) {
      alert("Please enter a valid year.");
      return;
    }
    // Proceed with the next steps
    console.log("Birth Year:", birthYear);
  };

  return (
    <div className="flex flex-col justify-start items-center bg-blue-900 h-screen p-4 pt-48">
      <div className="text-5xl flex mb-4">
        <h1 className="text-green-600">Webinar</h1>
        <span className="text-white">.gg</span>
      </div>

      <h1 className="text-5xl text-white mb-4">Verify Your Age</h1>

      <p className="text-gray-300 text-center mb-6 text-2xl">
        Please confirm your birth year. This data will not be stored.
      </p>

      <div className="flex flex-col items-center">
        <div className="w-80 mb-4">
          <label htmlFor="birthYear" className="sr-only">
            Your Birth Year
          </label>
          <input
            id="birthYear"
            type="text"
            className="w-full text-center text-2xl py-4 rounded-lg bg-blue-200 text-blue-900 outline-none placeholder-gray-500"
            placeholder="Your Birth Year"
            value={birthYear}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-80 text-2xl text-white py-4 rounded-lg bg-blue-300 hover:bg-green-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page1;
