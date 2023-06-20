import React, { useState } from "react";

const DropdownMenu1 = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pt-2 w-64">
      <label
        htmlFor="dropdown"
        className="block text-l font-medium text-black"
      >
       Status Pasien
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="mt-1 block w-full border-2 bg-[#D7DBDD] border-black rounded-md shadow-sm text-stone-950"
      >
        <option value=""></option>
        <option value="Lberobat">Lengkap Berobat</option>
        <option value="Pberobat">Putus Berobat</option>
        <option value="sembuh">Sembuh</option>
        <option value="dead">Meninggal</option>
      </select>
      {selectedOption && (
        <p className="mt-2 text-sm text-stone-950">filter by {selectedOption}</p>
      )}
    </div>
  );
};

export default DropdownMenu1;
