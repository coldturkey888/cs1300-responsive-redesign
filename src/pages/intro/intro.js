import './intro.css';
import { Link } from 'react-scroll';
import original_site from '../../assets/original_site.png';

var site_address = "https://rirpa.myrec.com/info/default.aspx"

function Intro() {
  return (
    <div className="App-section" id="intro">
      <div className="intro-top-left-corner">Chosen web page</div>
      <p className="intro-subtitle">The web page I've chosen to evaluate is:</p>
      <a href={site_address} target="_blank" rel="noreferrer noopener">
        <div className="intro-title-container">
          <p className="intro-title">The homepage of the Rhode Island Recreation and Parks Association website</p>
          <p className="intro-smallprint"><i>(Click me!)</i></p>
          </div>
        <img className="intro-image" src={original_site} alt="Screenshot of the original website" />
      </a>
      <p className="intro-subtitle">Why? Well, because its design is rather dated <i className="subtitle-smaller">(rather 2000s-esque)</i>, and could use a nice, modern refresh!</p>
      <Link className="bottom-right" activeClass="active" to="problems" spy={true} smooth={true}>
        <div className="intro-bottom-right-corner">Next: Finding problems</div>
      </Link>
    </div>
  );
}

export default Intro;
  