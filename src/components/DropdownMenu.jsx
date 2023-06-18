import React, { useState } from "react";

const DropdownMenu = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pt-2 w-64">
      <label
        htmlFor="dropdown"
        className="block text-sm font-medium text-black"
      >
        _filter
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="mt-1 block w-full border-2 bg-white border-black rounded-md shadow-sm"
      >
        <option value=""></option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
      </select>
      {selectedOption && (
        <p className="mt-2 text-sm text-gray-500">filter by {selectedOption}</p>
      )}
    </div>
  );
};

export default DropdownMenu;
