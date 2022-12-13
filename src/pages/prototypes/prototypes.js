import './prototypes.css';
import '../../lib/toggle-radios.css';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import ModalImage from "react-modal-image";

import lofi_phone from '../../assets/lofi/phone.png';
import lofi_tablet from '../../assets/lofi/tablet.png';
import lofi_desktop from '../../assets/lofi/desktop.png';
import hifi_phone from '../../assets/hifi/phone.png';
import hifi_tablet from '../../assets/hifi/tablet.png';
import hifi_desktop from '../../assets/hifi/desktop.png';
import visual_design_guide from '../../assets/hifi/visual_design_guide.png';

function Prototypes() {
  const [prototype, setPrototype] = useState("lofi");
  const [device, setDevice] = useState("phone");
  var isGuide = (prototype === "guide");

  var prototypeImage;

  if (prototype === "lofi") {
    if (device === "phone") {
      prototypeImage = lofi_phone;
    } else if (device === "tablet") {
      prototypeImage = lofi_tablet;
    } else if (device === "desktop") {
      prototypeImage = lofi_desktop;
    }
  } else if (prototype === "hifi") {
    if (device === "phone") {
      prototypeImage = hifi_phone;
    } else if (device === "tablet") {
      prototypeImage = hifi_tablet;
    } else if (device === "desktop") {
      prototypeImage = hifi_desktop;
    }
  } else if (prototype === "guide") {
    prototypeImage = visual_design_guide;
  }

  return (
    <div className="App-section" id="prototypes">
      <div className="prototypes-top-left-corner">Prototyping</div>

      <div className="prototypes-radio-row">
        <div class="toggle-radio" data-style="rounded">
          <input type="radio" name="prototype_selection" id="lofi" value="lofi" onClick={() => setPrototype("lofi")} defaultChecked />
          <label for="lofi">Lo-fi wireframe</label>
          <input type="radio" name="prototype_selection" id="hifi" value="hifi" onClick={() => setPrototype("hifi")} />
          <label for="hifi">Hi-fi prototype</label>
          <input type="radio" name="prototype_selection" id="guide" value="guide" onClick={() => setPrototype("guide")} />
          <label for="guide">Visual design guide</label>
        </div>

        <div class="toggle-radio" data-style="rounded">
          <input type="radio" name="device_selection" id="phone" value="phone" disabled={isGuide} onClick={() => setDevice("phone")} defaultChecked />
          <label for="phone">Phone</label>
          <input type="radio" name="device_selection" id="tablet" value="tablet" disabled={isGuide} onClick={() => setDevice("tablet")} />
          <label for="tablet">Tablet</label>
          <input type="radio" name="device_selection" id="desktop" value="desktop" disabled={isGuide} onClick={() => setDevice("desktop")} />
          <label for="desktop">Desktop</label>
        </div>
      </div>

      <ModalImage className="prototypes-image" small={prototypeImage} large={prototypeImage} hideDownload={true} hideZoom={true} />
      
      <Link className="bottom-right" activeClass="active" to="redesign" spy={true} smooth={true}>
        <div className="prototypes-bottom-right-corner">Next: Redesigned web page</div>
      </Link>
    </div>
  );
}

export default Prototypes;
  