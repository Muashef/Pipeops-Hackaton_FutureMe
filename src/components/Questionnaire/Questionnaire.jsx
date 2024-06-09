import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuestionnaire } from "./QuestionnaireProvider/QuestionnaireProvider";

const componentNames = [
  "Interests and Passions",
  "Skills and Strengths",
  "Preferred Work Environment",
  "Career Goal",
  "Ideal job role",
];

function Questionnaire() {
  const {
    inView,
    setInView,
    interests,
    setInterests,
    newInterest,
    setNewInterest,
  } = useQuestionnaire();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inView == compList.length - 1);

    if (newInterest && !interests.includes(newInterest)) {
      setInterests((prevInterests) => [...prevInterests, newInterest]);
      setNewInterest(""); // Clear the input after adding
    }
    if (inView == compList.length - 1) {
      return;
    } else {
      setInView((prevInView) => prevInView + 1);
    }
  };

  const setInterestInfo = (updatedInterests) => {
    setInterests(updatedInterests);
  };

  const compList = [
    <Interest
      key={0}
      interests={interests}
      setInterestValue={setInterestInfo}
    />,
    <Skills key={1} />,
  ];

  return (
    <div className="questionnnaire container">
      Questionnaire
      <h2>Interests and Passions</h2>
      <p>Fill out these details to predict a suited career path</p>
      <div className="questionnaire__container">
        <div className="questionnaire__left">
          <div className="questionnaire__inview">{compList[inView]}</div>
          <div className="buttons">
            <button>Save Draft</button>
            <button onClick={handleClick}>Next Step</button>
          </div>
        </div>
        <div className="questionnaire__right">
          {componentNames.map((element, index) => {
            return (
              <div
                className={
                  inView == index
                    ? "component__select active"
                    : "component__select"
                }
                key={index}
                onClick={() => setInView(index)}
              >
                <div className="index">{index + 1}</div>
                <h4>{element}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;

Questionnaire.propTypes = {
  componentList: PropTypes.array,
};

export function Interest() {
  const { interests, setInterests, newInterest, setNewInterest } =
    useQuestionnaire();

  const interestLabels = [
    "Reading and Writing",
    "Working with numbers",
    "Creating art",
    "Solving puzzles",
    "Socializing and networking",
    "Building and fixing things",
  ];

  const handleInputChange = (event) => {
    setNewInterest(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedInterests;

    if (checked) {
      updatedInterests = [...interests, name];
    } else {
      updatedInterests = interests.filter((interest) => interest !== name);
    }
    setInterests(updatedInterests);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={newInterest}
            onChange={handleInputChange}
            placeholder="Enter a new interest"
          />
          {interestLabels.map((element, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={element}
                  checked={interests.includes(element)}
                  onChange={handleCheckboxChange}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

Interest.propTypes = {
  interests: PropTypes.array.isRequired,
  setInterestValue: PropTypes.func.isRequired,
};

export const Skills = () => {
  const { skills, setSkills, newSkill, setNewSkill } = useQuestionnaire();

  const interestLabels = [
    "Collaborative team setting",
    "Independent and quiet",
    "Fast-paced and dynamic",
    "Structured and organized",
    "Flexible and changing",
    "Hands-on and practical",
  ];

  const handleInputChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedInterests;

    if (checked) {
      updatedInterests = [...skills, name];
    } else {
      updatedInterests = skills.filter((interest) => interest !== name);
    }
    setSkills(updatedInterests);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={newSkill}
            onChange={handleInputChange}
            placeholder="Enter a new interest"
          />
          {interestLabels.map((element, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={element}
                  checked={skills.includes(element)}
                  onChange={handleCheckboxChange}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
