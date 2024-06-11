import React, { createContext } from "react";
import { useContext, useState } from "react";

const QuestionnaireContext = createContext();

///Here all the states are set, including a state for the input:text for the user to input their own preference
export const QuestionnaireProvider = ({ children }) => {
  const [inView, setInView] = useState(0);
  const [interests, setInterests] = useState([]);
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);
  const [career, setCareer] = useState([]);
  const [jobRole, setJobRole] = useState([]);
  const [newInterest, setNewInterest] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newWork, setNewWork] = useState("");
  const [newCareerGoal, setNewCareerGoal] = useState("");
  const [newJobRole, setNewJobRole] = useState("");

  return (
    <QuestionnaireContext.Provider
      value={{
        inView,
        setInView,
        interests,
        setInterests,
        newInterest,
        setNewInterest,
        skills,
        setSkills,
        newSkill,
        setNewSkill,
        work,
        setWork,
        newWork,
        setNewWork,
        career,
        setCareer,
        newCareerGoal,
        setNewCareerGoal,
        jobRole,
        setJobRole,
        newJobRole,
        setNewJobRole,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

// Create a custom hook to use the QuestionnaireContext
export const useQuestionnaire = () => {
  return useContext(QuestionnaireContext);
};
