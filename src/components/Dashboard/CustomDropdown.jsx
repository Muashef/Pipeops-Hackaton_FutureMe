/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomDropdown = ({ options, arr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown text-sm relative w-36">
      <div
        className="dropdown-header border border-[#ccc] bg-white rounded-md cursor-pointer p-2 flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedOption.label}</span>
        <img src={arr} className={`arrow ${isOpen ? "open" : ""} w-4 h-4`} />
      </div>
      {isOpen && (
        <div className="border border-[#ccc] absolute z-20 top-[100%] left-0 right-0 bg-white rounded-md">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-[#f0f0f0]"
              onClick={() => handleOptionClick(option)}
              aria-disabled={option?.disabled}
              aria-selected={option?.disabled}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
