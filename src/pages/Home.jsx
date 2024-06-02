import React, { useEffect, useRef } from "react";
import * as util from "../components/Home";
import Navigation from "../components/Navigation/Navigation";
import { useLocation } from "react-router-dom";

const links = [
  // {
  //   label: "Solutions",
  //   link: "/",
  // },
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "How It Works",
    link: "#how",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Home = () => {
  const featuresRef = useRef(null);
  const howRef = useRef(null);
  const contactRef = useRef(null);

  let { hash } = useLocation();

  useEffect(() => {
    if (hash === "#features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#how" && howRef.current) {
      howRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
    window.location.hash = "";
  }, [hash]);

  return (
    <div>
      <Navigation links={links} />
      <util.Header />

      <div id="features" ref={featuresRef}>
        <util.Transform />
      </div>

      <div id="how" ref={howRef}>
        <util.How />
      </div>

      <div id="contact" ref={contactRef}>
        <util.Footer />
      </div>
    </div>
  );
};

export default Home;
