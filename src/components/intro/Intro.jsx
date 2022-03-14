import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Intro = () => {
  const animText = useRef();
  useEffect(() => {
    init(animText.current, {
      showCursor: true,
      typeSpeed: 250,
      backSpeed: 200,
      strings: ["Use with React.js!", "Yeah!"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="box">
          <div className="image">
            <img src="images/man.png" />
          </div>
        </div>
        <div className="box">
          <h2>hi there, i'm</h2>
          <h1>majedul islam</h1>
          <h3>
            developer <span ref={animText}></span>
          </h3>
          <a href="#portfolio">
            <FontAwesomeIcon className="arrow" icon={faAngleDown} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
