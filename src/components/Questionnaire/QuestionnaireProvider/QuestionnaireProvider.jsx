import React, { createContext } from "react";
import { useContext, useState } from "react";

const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [inView, setInView] = useState(0);
  const [interests, setInterests] = useState([]);
  const [skills, setSkills] = useState([]);
  const [newInterest, setNewInterest] = useState("");
  const [newSkill, setNewSkill] = useState(""); 

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
