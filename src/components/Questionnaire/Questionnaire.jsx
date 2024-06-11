import PropTypes from "prop-types";
import { useQuestionnaire } from "./QuestionnaireProvider/QuestionnaireProvider";
import {
  CareerGoals,
  Interest,
  JobRole,
  Skills,
  WorkEnv,
} from "./QuestionnaireComps";

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
  } = useQuestionnaire();

  const handleClick = (e) => {
    e.preventDefault();
    if (newInterest && !interests.includes(newInterest)) {
      setInterests((prevInterests) => [...prevInterests, newInterest]);
      setNewInterest(""); // Clear the input after adding
    }
    if (newSkill && !skills.includes(newInterest)) {
      setSkills((prevInterests) => [...prevInterests, newSkill]);
      setNewSkill(""); // Clear the input after adding
    }
    if (newWork && !work.includes(newWork)) {
      setWork((prevInterests) => [...prevInterests, newWork]);
      setNewWork(""); // Clear the input after adding
    }
    if (newCareerGoal && !career.includes(newCareerGoal)) {
      setCareer((prevInterests) => [...prevInterests, newCareerGoal]);
      setNewCareerGoal(""); // Clear the input after adding
    }
    if (newJobRole && !jobRole.includes(newJobRole)) {
      setJobRole((prevInterests) => [...prevInterests, newJobRole]);
      setNewJobRole(""); // Clear the input after adding
    }
    if (inView == compList.length - 1) {
      console.log("this is something");
      return;
    } else {
      setInView((prevInView) => prevInView + 1);
    }
  };

  const generateCareerOption = () => {};

  const compList = [
    <Interest key={0} />,
    <Skills key={1} />,
    <WorkEnv key={2} />,
    <CareerGoals key={3} />,
    <JobRole key={4} />,
  ];

  return (
    <div className="questionnaire container">
      <h2 className="title">Career Questionnaire</h2>
      <p className="tag">
        Fill out these details to predict a suited career path
      </p>
      <div className="questionnaire__container">
        <div className="questionnaire__left">
          <div className="questionnaire__inview">{compList[inView]}</div>
          <div className="buttons">
            <button>Save Draft</button>
            <button onClick={handleClick}>
              {inView == compList.length ? "Take To Dashboard" : "Next Step"}
            </button>
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
          <div className="help">
            <h4>Need Help?</h4>
            <p>
              Get to know how will predict career paths with our machine model
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;

Questionnaire.propTypes = {
  componentList: PropTypes.array,
};
