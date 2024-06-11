import PropTypes from "prop-types";
import { useQuestionnaire } from "./QuestionnaireProvider/QuestionnaireProvider";

///Each function is one page of the questionnaire
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
    <form>
      <div>
        <input
          type="text"
          value={newInterest}
          onChange={handleInputChange}
          placeholder="What activities do you enjoy the most in your free time?"
        />
        {interestLabels.map((element, index) => {
          return (
            <div key={index} className="checkbox__label">
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
  );
}

export const Skills = () => {
  const { skills, setSkills, newSkill, setNewSkill } = useQuestionnaire();

  const interestLabels = [
    "Analytical thinking",
    "Creative problem-solving",
    "Effective communication",
    "Technical skills",
    "Leadership",
    "Research and analysis",
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
    <>
      <form>
        <div>
          <input
            type="text"
            value={newSkill}
            onChange={handleInputChange}
            placeholder="Which skills do you excel at?"
          />
          {interestLabels.map((element, index) => {
            return (
              <div key={index} className="checkbox__label">
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
    </>
  );
};

export const WorkEnv = () => {
  const { work, setWork, newWork, setNewWork } = useQuestionnaire();

  const interestLabels = [
    "Collaborative team setting",
    "Independent and quiet",
    "Fast-paced and dynamic",
    "Structured and organized",
    "Flexible and changing",
    "Hands-on and practical",
  ];

  const handleInputChange = (event) => {
    setNewWork(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedInterests;

    if (checked) {
      updatedInterests = [...work, name];
    } else {
      updatedInterests = work.filter((interest) => interest !== name);
    }
    setWork(updatedInterests);
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={newWork}
            onChange={handleInputChange}
            placeholder="What type of work environment do you prefer?"
          />
          {interestLabels.map((element, index) => {
            return (
              <div key={index} className="checkbox__label">
                <input
                  type="checkbox"
                  name={element}
                  checked={work.includes(element)}
                  onChange={handleCheckboxChange}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export const CareerGoals = () => {
  const { career, setCareer, newCareerGoal, setNewCareerGoal } =
    useQuestionnaire();

  const interestLabels = [
    "High earning potential",
    "Work-life balance",
    "Creative freedom",
    "Helping others",
    "Continuous learning",
    "Career advancement",
  ];

  const handleInputChange = (event) => {
    setNewCareerGoal(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedInterests;

    if (checked) {
      updatedInterests = [...career, name];
    } else {
      updatedInterests = career.filter((interest) => interest !== name);
    }
    setCareer(updatedInterests);
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={newCareerGoal}
            onChange={handleInputChange}
            placeholder="What is your primary career goal?"
          />
          {interestLabels.map((element, index) => {
            return (
              <div key={index} className="checkbox__label">
                <input
                  type="checkbox"
                  name={element}
                  checked={career.includes(element)}
                  onChange={handleCheckboxChange}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export const JobRole = () => {
  const { jobRole, setJobRole, newJobRole, setNewJobRole } = useQuestionnaire();

  const interestLabels = [
    "Innovator and Creator ",
    "Organizer  and Planner",
    "Advisor and counsellor",
    "Leader and manager",
    "Technician and specialist",
    "Researcher and analyst",
  ];

  const handleInputChange = (event) => {
    setNewJobRole(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedInterests;

    if (checked) {
      updatedInterests = [...jobRole, name];
    } else {
      updatedInterests = jobRole.filter((interest) => interest !== name);
    }
    setJobRole(updatedInterests);
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={newJobRole}
            onChange={handleInputChange}
            placeholder="What is your primary career goal?"
          />
          {interestLabels.map((element, index) => {
            return (
              <div key={index} className="checkbox__label">
                <input
                  type="checkbox"
                  name={element}
                  checked={jobRole.includes(element)}
                  onChange={handleCheckboxChange}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};
