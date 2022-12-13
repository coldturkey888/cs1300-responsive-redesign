import './reflections.css';
import { Link } from 'react-scroll';

function Reflections() {
  return (
    <div className="App-section" id="reflections">
      <div className="reflections-top-left-corner">Reflections</div>
      <p className="reflections-preface">Here are some reflections I've had after completing this activity:</p>
      <div className="reflections">
        <ol className="reflections-content">
          <li className="reflections-item"><span>The process of designing for multiple types of devices is not easy at all. Not only must the designer consider the size of the devices, the aspect ratio of the screen should also adjust the layout of the visual elements.</span></li>
          <li className="reflections-item"><span>New mobile devices are emerging, including foldable devices and "mini-sized" screens like smartwatches. The existence of all these devices present a new type of challenge to UI designers.</span></li>
          <li className="reflections-item"><span>Users' mental models are constantly changing. Hamburger menus may have been "intuitive" in the past five years, but they may not be in the next five years. As such, user interfaces should be updated over time to reflect newer, more widely accepted conceptual models.</span></li>
          <li className="reflections-item"><span>Designing a touchscreen-based interface requires a different approach than designing for a pointer-based interface. The former usually prioritizes the ability for users to interact with all elements with "fat fingers", while the latter usually prioritizes the organization of content that can neatly fit into the viewport.</span></li>
        </ol>
      </div>
      <Link className="bottom-right" activeClass="active" to="context" spy={true} smooth={true}>
        <div className="reflections-bottom-right-corner">Back to the top</div>
      </Link>
    </div>
  );
}

export default Reflections;
