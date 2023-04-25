import { useState } from "react";
import icArrow from "../../assets/ic-arrow.svg";

function Dropdown({ label, options, onChange, placeholder }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onChange(newOption);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-xs md:text-sm font-bold">{label}</label>}
      <button
        type="button"
        className="relative inline-flex rounded-xl border border-gray-300 py-2 px-4 items-center justify-between"
      >
        <select
          className="flex-1 text-gray-600 h-10 bg-white focus:outline-none appearance-none cursor-pointer"
          value={selectedOption || placeholder}
          onChange={handleOptionChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img src={icArrow} alt="icon arrow" />
      </button>
    </div>
  );
}

export default Dropdown;
