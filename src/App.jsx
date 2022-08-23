import "./App.css";
import professor from "./Assets/Prof trans.png";
import gif from "./Assets/gif2.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="first-section">
          <div className="social-div">
            <a href="#" className="purple">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="green">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="purple">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="green">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <img src={gif} alt="gif" />
        </div>
        <div className="second-section">
          <h1>
            WE DELIVER SOLUTIONS <br /> INCLUDING SEAMLESS <br /> INTERGRATION
            OF THE <br /> BEST FEATURES FROM <br /> WEB 2 & WEB 3 MERGED INTO{" "}
            <br /> PROJECT DESIGN & BUILD <br /> INNOVATIONS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
