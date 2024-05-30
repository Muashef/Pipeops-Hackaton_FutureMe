import React from "react";
import Rocket from "../../assets/ic_baseline-rocket.png";
import Curate from "../../assets/curate.png";
import Clock from "../../assets/clock.png";
import Star from "../../assets/star.png";

const data = [
  {
    image: Rocket,
    info: "Receive tailored career suggestions based on your unique skills",
  },
  {
    image: Clock,
    info: "Understand your strengths with in-depth skill assessments",
  },
  {
    image: Curate,
    info: "Explore curated resources to guide your career journey",
  },
  {
    image: Star,
    info: "Discover career paths aligned with emerging industry trends",
  },
];

export function Transform() {
  return (
    <div className="features container">
      <h3>Transform Your Future</h3>
      <p className="subtitle">
        Unlock your career potential with our innovative platform designed to
        guide you towards your dream job.
      </p>
      <div className="features__items">
        {data.map((element, index) => {
          return (
            <div key={index} className="feature">
              {/* <div className="img">
            <img src={Rocket} alt="" />
          </div> */}

              <img src={element.image} alt="" />
              <p>{element.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
