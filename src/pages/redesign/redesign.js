import './redesign.css';
import { Link } from 'react-scroll';
import redesigned_site from '../../assets/redesigned_site.png';

var site_address = 'redesigned.html'

function Redesign() {
  return (
    <div className="App-section" id="redesign">
      <div className="redesign-top-left-corner">Redesigned web page</div>
      <p className="redesign-subtitle">Based on the above prototypes, I've built the following web page:</p>
      <a href={site_address} target="_blank" rel="noreferrer noopener">
        <div className="redesign-title-container">
          <p className="redesign-title">RIRPA, Redesigned</p>
          </div>
        <img className="redesign-image" src={redesigned_site} alt="Screenshot of the redesigned website" />
      </a>
      <Link className="bottom-right" activeClass="active" to="reflections" spy={true} smooth={true}>
        <div className="redesign-bottom-right-corner">Next: Reflections</div>
      </Link>
    </div>
  );
}

export default Redesign;
  