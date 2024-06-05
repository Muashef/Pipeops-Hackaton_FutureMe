import { Link } from "react-router-dom";
import background from "../../assets/hone_bg.png";
import bgBottomLeft from "../../assets/header__bg.png";
import bgBottomRight from "../../assets/header__bg2.png";
import lock from "../../assets/lock.png";
import unlock from "../../assets/unlock.png";

export function Header() {
  return (
    <main className="header">
      <img src={background} className="header__bg" alt="" />
      <img src={bgBottomLeft} className="bg__header bg__left" alt="" />
      <img src={bgBottomRight} className="bg__header bg__right" alt="" />
      <div className="lock">
        <img src={lock} alt="" />
      </div>
      <div className="unlock">
        <img src={unlock} alt="" />
      </div>
      <div>
        <p>Discover Your Future</p>
        <h1>Career Path Unlock</h1>

        {/* <img src={test} alt="" style={{ width: "100px", height: "100px" }} /> */}
        <div className="learn__more">
          <Link to={"/"} className="learn__more__link">
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
