/* eslint-disable react/prop-types */
import feature1 from "../../assets/icon.svg";
import feature2 from "../../assets/link.svg";
import feature3 from "../../assets/receipt.svg";
import feature4 from "../../assets/AvatarGroups.svg";
const features = [
  { text: "Retake the Questionnaire", img: feature1, color: "#FEF6E7" },
  { text: "Explore Career Paths", img: feature2, color: "#FFECE5" },
  { text: "Save and Compare Careers", img: feature3, color: "#E7F6EC" },
  { text: "Connect with Professionals", img: feature4, color: "#E3EFFC" },
];
function Features() {
  return (
    <div className="dashboard-features flex flex-col items-start gap-4 my-10">
      <h2 className="text-lg font-semibold">Do more with FutureMe</h2>
      <div className="features-div flex justify-center items-center gap-4">
        {features.map((feat, i) => (
          <Feature text={feat.text} img={feat.img} color={feat.color} key={i} />
        ))}
      </div>
    </div>
  );
}
function Feature({ img, text, color }) {

  return (
    <div
      className={`feature flex flex-col items-start gap-10 py-8 pr-4 pl-6 rounded-xl text-left h-[174px]`}
      style={{ backgroundColor: color }}
    >
      <img src={img} />
      <p className="font-semibold leading-4 max-w-[12ch]">{text}</p>
    </div>
  );
}

export default Features;
