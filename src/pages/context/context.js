import './context.css';
import { Link } from 'react-scroll';

function Context() {
  return (
    <div className="App-section" id="context">
      <div className="context-top-left-corner">Responsive Redesign</div>
      <p className="context-preface">What is this project?</p>
      <div className="context">
        <p className="context-content">Choose an existing web page and identify existing usability problems with it. Come up with a prototype that solves these issues, and build the final web page. This final product should be responsive to mobile, tablet and desktop interfaces!</p>
      </div>
      <hr className="solid-hr"></hr>
      <p className="context-preface">What was I trying to achieve through this project?</p>
      <div className="context">
        <ol className="context-content">
          <li className="context-item"><span>To practice the workflow of redesigning a simple website</span></li>
          <li className="context-item"><span>To expand on wireframing and prototyping skills by considering different designs for different interfaces</span></li>
          <li className="context-item"><span>To practice the process of analyzing a web page for design and usability issues</span></li>
          <li className="context-item"><span>To practice web development skills, including the handling of different screen dimensions</span></li>
        </ol>
      </div>
      <Link className="bottom-right" activeClass="active" to="intro" spy={true} smooth={true}>
        <div className="context-bottom-right-corner">Next: Chosen web page</div>
      </Link>
    </div>
  );
}

export default Context;
  