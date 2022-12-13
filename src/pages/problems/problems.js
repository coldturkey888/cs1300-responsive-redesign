import './problems.css';
import { Link } from 'react-scroll';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalImage from "react-modal-image";
import 'react-tabs/style/react-tabs.css';

import multiple_register_options from '../../assets/multiple_register_options.png';
import register_account_confusion from '../../assets/register_account_confusion.png';
import interactive_areas from '../../assets/interactive_areas.png';
import repeated_links from '../../assets/repeated_links.png';
import repeated_register from '../../assets/repeated_register.png';
import icon_bar from '../../assets/icon_bar.png';

function Problems() {
  return (
    <div className="App-section" id="problems">
      <div className="problems-top-left-corner">Finding problems</div>
      <p className="problems-preface">Let's do an analysis on the usability of the web page:</p>
      <div className="problems-tab-container">
        <Tabs>
          <TabList>
            <Tab>Learnability & Memorability</Tab>
            <Tab>Efficiency</Tab>
            <Tab>Accessibility</Tab>
          </TabList>

          {/* Learnability & Memorability */} 
          <TabPanel>
            <h2 className="problems-tabpanel-header">If a new user was looking at this page for the first time, or if a returning user was using the page:</h2>
            <div className="problems-tabpanel-content">
              <div className="problems-tabpanel-content-left">
                <ul>
                  <li>
                    They might not understand the difference between "Register", "Log In" and "Membership".
                    <ModalImage className="problems-learn-image-left" small={register_account_confusion} large={register_account_confusion} hideDownload={true} hideZoom={true} />
                  </li>
                  <li>
                    They might attempt clicking the yellow areas without realizing that only the red-boxed areas are clickable.
                    <ModalImage className="problems-learn-image-left" small={interactive_areas} large={interactive_areas} hideDownload={true} hideZoom={true} />
                  </li>
                </ul>
              </div>
              <div className="problems-tabpanel-content-right">
                <ul>
                  <li>
                    They might be rather confused by the numerous options available in the "Register" menu. In fact, most of these links navigate to pages with similar content, which
                    is just horrendous site design in general. <i>(I'm serious, try it out yourself.)</i>
                    <ModalImage className="problems-learn-image-right" small={multiple_register_options} large={multiple_register_options} hideDownload={true} hideZoom={true} />
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>

          {/* Efficiency */} 
          <TabPanel>
            <h2 className="problems-tabpanel-header">The following design choices could result in an inefficient user experience:</h2>
            <div className="problems-tabpanel-content">
              <div className="problems-tabpanel-content-left">
                <ul>
                  <li>
                    There are two "Register" links in close proximity to each other, both of which perform different actions. <i>(One opens a drop-down menu, while the other links to a different page.)</i>
                    <ModalImage className="problems-efficient-image-left" small={repeated_register} large={repeated_register} hideDownload={true} hideZoom={true} />
                  </li>
                  <li>
                    The shortcut icon bar, while convenient, takes up more space than necessary, is rather disorganized and does not seem to follow a logical sequence.
                    <ModalImage className="problems-efficient-image-left" small={icon_bar} large={icon_bar} hideDownload={true} hideZoom={true} />
                  </li>
                  <li>Note that the welcome message is displayed very far down on the page. Since it doesn't appear on the inital viewport, the user would have to scroll down on the page to be able to view it.
                    That's not very welcoming, is it?
                  </li>
                </ul>
              </div>
              <div className="problems-tabpanel-content-right">
                <ul>
                  <li>
                    There is also quite a bit of redundancy: multiple links all across the web page, linking to the same page.
                    <ModalImage className="problems-efficient-image-right" small={repeated_links} large={repeated_links} hideDownload={true} hideZoom={true} />
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>


          {/* Accessibility */}
          <TabPanel>
          <h2 className="problems-tabpanel-header">WebAIM WAVE discovered the following issues:</h2>
          <div className="problems-tabpanel-content">
            <ul>
              <li><b>5 x Images missing alternative text:</b> A lack of alt text would usually reduce the experience for screen reader users, as the screen reader software would not be able to describe the content of the image to the user.
              However, in this case, thankfully, the images that are missing alt text are rather insignificant. (Four of them are background "texture" images, while the last image is a logo of one of the association's sponsors.)</li>
              <li><b>1 x Empty link:</b> This could be problematic. While an empty link is not presented visually (i.e. is "invisible") to a seeing user, it would be mistakenly narrated to a screen reader user, which could potentially cause them some confusion.</li>
              <li><b>1 x Language missing or invalid:</b> The site actually uses a Google Translate plug-in (accessible via the widget at the bottom of the page) to translate the content to different languages. However, it remains unclear if a screen reader software
              (e.g. JAWS) would be able to identify the selected language despite it not being declared via the <code>&lt;html lang&gt;</code> attribute.</li>
              <li><b>20 x Very low contrast:</b> These were most likely wrongly labelled. WAVE had correctly found the following styling in the footer's HTML code — <code>color: rgb(203, 203, 203); background-color: rgb(255, 255, 255)</code> — this suggests light-grey
              text against a white background. However, looking at the actual footer on the site, this is obviously not the case. It turns out that WAVE has failed to identify that there is also a dark-colored, textured background added to the footer via CSS. Hence,
              this error is most likely invalid.</li>
              <li><b>11 x Redundant links:</b> These are in relation to what I've mentioned under the "Efficiency" tab. When it comes to screen reader users, additional links that navigate to the same page can often confuse rather than complement the experience.</li>
              <li><b>1 x Justified text:</b> A block of justified text actually makes it harder to read due to the varying spacing between letters.</li>
            </ul>
          </div>
          </TabPanel>

        </Tabs>
      </div>
      <Link className="bottom-right" activeClass="active" to="prototypes" spy={true} smooth={true}>
        <div className="problems-bottom-right-corner">Next: Prototyping</div>
      </Link>
    </div>
  );
}

export default Problems;
  