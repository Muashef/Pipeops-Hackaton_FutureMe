import PropTypes from "prop-types";
import { useQuestionnaire } from "./QuestionnaireProvider/QuestionnaireProvider";
import { Interest, Skills, WorkEnv } from "./QuestionnaireComps";

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
    if (newInterest && !interests.includes(newInterest)) {
      setInterests((prevInterests) => [...prevInterests, newInterest]);
      setNewInterest(""); // Clear the input after adding
    }
    if (inView == compList.length - 1) {
      console.log("this is something");
      return;
    } else {
      setInView((prevInView) => prevInView + 1);
    }
  };

  const compList = [
    <Interest key={0} />,
    <Skills key={1} />,
    <WorkEnv key={2} />,
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
