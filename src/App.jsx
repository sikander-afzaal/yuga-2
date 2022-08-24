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
import footGif from "./Assets/foot.gif";
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
      <div className="third-section">
        <h2>in the deepest corner of the “Labz”</h2>
        <h2>lye,, our team of degen geniuses</h2>
        <h2>
          Made up of <br /> developers , innovators{" "}
        </h2>
        <h2>All with one thing in common,</h2>
        <h2>We all chose the RED pill,</h2>
        <h2>
          And followed web3 Down the rabbit hole to <br /> see exactly how far
          this shit goes{" "}
        </h2>
        <h2>Needless to say,,, we’re still going,,</h2>
      </div>
      <div className="fourth-section">
        <h2>NFT PROJECTS</h2>
        <h2>Project Features</h2>
        <div className="text">
          <h2>
            Logo Creation a bespoke created logo, hand drawn , original art
            Sales website, roadmap + more Story, themed background to match
            personality
          </h2>
          <h2>
            2 years domain hosting + free domain and SSL certificate 1 x tier 1,
            2d character And up to 300 traits (or 2 x character ,,,150 traits
            each)
          </h2>
          <h2>
            up to 10,000 unique piece collection generation Flip vid Artwork to
            give examples on site ,, Solidity Smart Contract{" "}
          </h2>
          <h2>
            Minting engine + IPFS server All meta data To give rarities,,good
            Quality metadata,{" "}
          </h2>
          <h2>secondary marketplace integration </h2>
          <h2>Metamask wallet integration </h2>
          <h2>
            Deployment of your contract onto the Blockchain to set the project
            live
          </h2>
          <h2>
            All social pages themed inc DISCORD setup with enough boosts to make
            it fancy , all created and passwords and names as close as poss to
            the project name
          </h2>
        </div>
      </div>
      <div className="fifth-section">
        <h2>web2 to 3 solutions</h2>
        <h2>
          100% web3 future proof websites using software suites such as react
          js, vue js node js and more bringing the ultimate in web3 user
          experience and a level of professionalism to your project…
        </h2>
        <h2>
          <span className="purple">NO</span> Wordpress,,,
          <span className="purple">NO</span> webflow,,,{" "}
          <span className="purple">NO</span> compromises
        </h2>
        <h2>Full stack in house specialist team</h2>
        <h2>Technical custom smart contract creation</h2>
        <h2>Decentralised exchanges</h2>
        <h2>
          web2 + web3 custom dex/cex blend and payment email backend
          intergration
        </h2>
        <h2>Full ecosystem creation</h2>
        <h2>Complete battle testing on project builds</h2>
        <h2>Currently taking orders for layer 1 blockchain builds</h2>
        <h2>
          Let us bring your business up to date by implementing new innovative
          services
        </h2>
        <h2>
          Secure web3 ,token/nft wallet creation solution using just your email
          address
        </h2>
        <h2>
          Fiat currency debit/credit card ramp solutions allows ease of access
          to purchase easily for the non crypto savvy clients, drastically
          improving customer and retention, through the point of sale process
        </h2>
      </div>
      <footer>
        <h3>Get in Touch</h3>
        <img src={footGif} alt="" />
        <p>Follow us on social media</p>
        <div className="foot-social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
