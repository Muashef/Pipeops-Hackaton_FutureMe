/* eslint-disable react/prop-types */
import { useState } from "react";
import badge from "../../assets/Badge.svg";
import comp1 from "../../assets/comp1.svg";
import comp2 from "../../assets/comp2.svg";
import comp3 from "../../assets/comp3.svg";
import arr from "../../assets/arr.svg";
import downArr from "../../assets/downArr.svg";
import filter from "../../assets/filter.svg";
import Button from "./Button";
import CustomDropdown from "./CustomDropdown";
const tabBtn = [{ text: "Explore" }, { text: "Careers" }];
const careers0 = [
  {
    jobName: "Software Developer",
    location: "Ascend Inc, London",
    img: comp1,
    recommended: true,
    salary: "100,000",
  },
  {
    jobName: "Marketing Manager",
    location: "United Capital Money, Dubai",
    img: comp2,
    recommended: true,
    salary: "250,000",
  },
  {
    jobName: "Data Scientist",
    location: "OperaMini Hq, Germany",
    img: comp3,
    recommended: false,
    salary: "650,000",
  },
];
const careers1 = [
  {
    jobName: "Backend Developer",
    location: "United Capital Money, Dubai",
    img: comp2,
    recommended: false,
    salary: "300,000",
  },
  {
    jobName: "Product Manager",
    location: "Ascend Inc, London",
    img: comp1,
    recommended: true,
    salary: "280,000",
  },
  {
    jobName: "Machine Learning Engineer",
    location: "OperaMini Hq, Germany",
    img: comp3,
    recommended: true,
    salary: "450,000",
  },
];
const opts = [
  { label: "All Categories", value: "", disabled: true },
  { label: "Salary", value: "salary" },
  { label: "Recommended", value: "recommended" },
  { label: "Location", value: "location" },
];
function Careers() {
  //   const [category, setCategory] = useState("");
  const [active, setActive] = useState(0);
  return (
    <div className="careersContainer ml-[20%] px-8 mt-[-1em]">
      <div className="top border-b-2 flex justify-between h-9">
        <span className="text-sm">
          {tabBtn.map((tab, i) => (
            <Span
              key={i}
              text={tab.text}
              onClick={setActive}
              i={i}
              active={active}
            />
          ))}
        </span>
        <span className="custom-select flex gap-6 h-full relative bottom-3">
          {/* <select
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none outline-none border-[3px] rounded-md text-sm py-1 px-5"
          >
            <option disabled selected value="">
              All Categories
            </option>
            <option>Salary</option>
            <option>Recommended</option>
            <option>Location</option>
          </select> */}
          <CustomDropdown
            options={opts}
            arr={downArr}
          />
          <button className="border-[3px] border-[#F97699] rounded-md px-4 text-[#F97699] text-sm">
            <img src={filter} className="inline" />
            Filter
          </button>
        </span>
      </div>
      <div className="careers mt-3 mb-6 flex justify-evenly items-center gap-5">
        {active === 0 &&
          careers0.map((c, i) => (
            <Career
              key={i}
              jobName={c.jobName}
              location={c.location}
              recommended={c.recommended}
              salary={c.salary}
              img={c.img}
            />
          ))}
        {active === 1 &&
          careers1.map((c, i) => (
            <Career
              key={i}
              jobName={c.jobName}
              location={c.location}
              recommended={c.recommended}
              salary={c.salary}
              img={c.img}
            />
          ))}
      </div>
      <Pagination />
    </div>
  );
}
function Span({ text, active, onClick, i }) {
  return (
    <span
      className={`px-5 py-4 cursor-pointer relative h-full${
        active === i
          ? "active-career text-[#F97699] border-b-2 border-[#F97699]"
          : ""
      }`}
      onClick={() => onClick(i)}
    >
      {text}
    </span>
  );
}
function Career({ jobName, salary, recommended, location, img }) {
  return (
    <div className="career flex flex-col w-1/3 border-[3px] rounded-lg p-4">
      <span className="flex justify-between w-full mb-2">
        <img src={img} className="" /> {recommended && <Recommended />}
      </span>
      <span className="flex justify-between border-b-2 pb-2 mb-3">
        <span className="my-4">
          <h2 className="text-[#101928] font-semibold text-xl">{jobName}</h2>
          <p className="text-xs text-[#667185]">{location}</p>
        </span>
        <img src={arr} />
      </span>
      <span className="flex justify-between items-center">
        <p className="text-sm text-[#667185]">Monthly Salary</p>
        <p className="text-[#0F973D] font-semibold text-lg">${salary}</p>
      </span>
    </div>
  );
}
function Recommended() {
  return <img src={badge} className="inline" />;
}
function Pagination() {
  return (
    <div className="pagination my-4 w-4/5 mx-auto flex justify-between items-center">
      <Button>Previous</Button>
      <span className="font-bold text-sm">Page 1 of 30</span>
      <Button>Next</Button>
    </div>
  );
}

export default Careers;
