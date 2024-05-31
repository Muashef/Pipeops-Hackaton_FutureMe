import React from "react";

const data = [
  {
    heading: "01 - Analyze Your Skills",
    detail:
      " Complete our comprehensive assessment to identify your unique strengths and interests.",
  },
  {
    heading: "02 - Receive Personalized Recommendations",
    detail: "Get tailored career suggestions based on your assessment results",
  },
  {
    heading: "03 - Explore Expert Resources",
    detail:
      "Access curated resources to help you prepare and succeed in your chosen career path",
  },
];
export function How() {
  return (
    <div className="how container features">
      <h3>How it works</h3>
      <p className="subtitle">
        Discovering your ideal career path is simple with our platform.
      </p>
      <div className="how__list">
        {data.map((element, index) => {
          return (
            <div key={index} className="how__list__item">
              <h4>{element.heading}</h4>
              <p>{element.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
