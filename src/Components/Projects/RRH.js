import React, { Component } from "react";
import Slider from "./Slider";

class RRH extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  color = () => {
    const style = {
      color: this.props.data.color
    };
    return style;
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <div id="partone" className="sections mainTextWidth">
            <div className="projHeader">Problem Statement</div>
            <div className="projp">
              <p>
                Hospitals are a stressful place and navigating the space can
                cause a lot of problems to the visitor, the patient and the
                hospital staff.
              </p>
              <p>
                With this in mind we thought about our individual experiences at
                a hospital and thought of 4 major pain points as a visitor:
              </p>
            </div>
            <div className="fourList">
              <div className="listItem">
                <div className="itemNum" style={this.color()}>
                  01
                </div>
                <div className="subHeader">In an emotional state</div>
                <div className="itemContent">
                  Patients and visitors experience stress and confusion when
                  entering a hospital, resulting in emotionally charged actions.
                </div>
              </div>
              <div className="listItem">
                <div className="itemNum" style={this.color()}>
                  02
                </div>
                <div className="subHeader">Complex navigation in hospital</div>
                <div className="itemContent">
                  Hospital spaces are complex and vary in size. This makes
                  navigating a hospital extremely difficult even for a returning
                  visitor, as pertinent information such as patient location and
                  status are always updating.
                </div>
              </div>
              <div className="listItem">
                <div className="itemNum" style={this.color()}>
                  03
                </div>
                <div className="subHeader">Not clear what to do next</div>
                <div className="itemContent">
                  During a hospital stay or visit, after checking in and
                  navigating to an area, there is a disconnect when trying to
                  navigate to the next location such as a bathroom or lounge.
                </div>
              </div>
              <div className="listItem">
                <div className="itemNum" style={this.color()}>
                  04
                </div>
                <div className="subHeader">Not having patient information</div>
                <div className="itemContent">
                  As a visitor, knowing where the person you’re visiting is
                  located and their current status is critical. There is
                  currently no optimized communication link between patient and
                  visitor.
                </div>
              </div>
            </div>
          </div>
          <div id="parttwo" className="sections">
            <div className="projHeader mainTextWidth">Research</div>
            <div className="projp mainTextWidth">
              <p>
                After putting together our research direction based on the four
                major pain points we identified, we decided to research the
                hospital setting as a whole. We interviewed hospital
                administration and their biggest issue they found was visitors
                asking this question:
              </p>
              <div className="coloredHeader" style={this.color()}>
                "Where do I go?"
              </div>
              <p>
                Based on that statement we decided to limit our scope to a
                visitor who is coming to see a patient, rather than an entire
                slew of user types.
              </p>
              {/*user flows/user types*/}
              <p>
                We also found that hospitals also run like a business as well.
                For starters, hospitals are required to keep certain information
                private about patients in order to abide to HIPAA laws. Using an
                AR in this kind of setting brings up an awkward conversation
                about privacy protection. Hospitals also need money and thus,
                desire benefits that come in through these kinds of
                applications.
              </p>
            </div>
            <div className="fourgrid rrhgrid">
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 01"
                    src={require("../../images/RRH/onboarding-01.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp" style={this.color()}>
                    Lessen emotional stress
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 02"
                    src={require("../../images/RRH/onboarding-04.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp" style={this.color()}>
                    Bring benefits to the hospital
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 03"
                    src={require("../../images/RRH/onboarding-02.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp" style={this.color()}>
                    Inform visitors during a visit
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 04"
                    src={require("../../images/RRH/onboarding-03.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp" style={this.color()}>
                    Communicate with patient
                  </div>
                </div>
              </div>
            </div>
            <div className="projp mainTextWidth">
              Once all of our research had set us in a solid direction, we
              decided to move onto our user flows. We had a basic idea on how we
              wanted to present our app and created two flow that showed off the
              main essence of our project.
            </div>
            <div className="subHeader rrhflow mainTextWidth">
              User Flow 01: Onboarding
            </div>
            <div className="singlecolumn rrh">
              <img
                alt="user flow 1"
                src={require("../../images/RRH/flow-01.png")}
                className="mainTextWidth"
              />
            </div>
            <div className="subHeader mainTextWidth">
              User Flow 02: Navigating
            </div>
            <div className="singlecolumn rrh">
              <img
                alt="user flow 2"
                src={require("../../images/RRH/flow-02.png")}
                className="mainTextWidth"
              />
            </div>
          </div>
          <div id="partthree" className="sections mainTextWidth">
            <div className="projHeader">Design</div>
            <div className="projp">
              We wanted our designs to calm a user with playful interactions and
              illustrations without going too far and making it look childish.
              We used very simple illustrations that visualized the onboarding
              process and set an initial mood for the app. From there,
              simplified illustrations were used for other call outs to further
              balance the mood. We went for a monochromatic design to create a
              simple and easy to view UI with rounded boxes and circular buttons
              to further the friendliness of the app.
            </div>
            <div className="singlecolumn rrh">
              <img
                alt="boards"
                src={require("../../images/RRH/styleboards-01.png")}
              />
            </div>
          </div>
          <div id="partfour" className="sections" />
          <div className="projHeader mainTextWidth">Solutions</div>
          <div className="projp mainTextWidth">
            I wanted to create an interactive application that shows how large
            the homeless demographic really is in the United States while
            attaching faces and quotes to humanize them.
          </div>
          <div className="twocolum">
            <div className="hidImage" />
            <div className="text">
              <div className="subHeader">State Selection</div>
              <div className="desc projp">
                Hidden but not Hiding allows the user to select a specific state
                to explore while giving some general statistics that can be
                easily compared through visualization. By default, the
                application will detect the users current location and
                automatically select their current state. I wanted to go for
                this specific look because of the impact certain states have
                because of the sheer volume of homeless people within.
              </div>
            </div>
          </div>
          <div className="twocolum">
            <div className="text">
              <div className="subHeader">State Hub</div>
              <div className="desc projp">
                <p>
                  With-in each state, I changed the orientation of the dots to
                  encompass the main meat of the statistics and that was the
                  total number of homeless people in the state. On the left bar,
                  it gives a total population and a generalized statistic that
                  gives a better comparison of the homeless population in
                  relation to the total population.
                </p>
                <p>
                  There are also several calls to action that gives the user
                  options to explore further on their own.
                </p>
              </div>
            </div>
            <div className="hidimage">
              <img
                alt="community solution"
                src={require("../../images/Hid/final-comps-05.png")}
                className="myC-Grades"
              />
            </div>
          </div>
          <div className="twocolum">
            <div className="hidImage" />
            <div className="text">
              <div className="subHeader">Filter by Demographic</div>
              <div className="desc projp">
                The demographic page generates its statistical data from the
                population of the currently selected state. By adding filters, a
                person can further explore the population through layers of
                exploration. I wanted to allow the user to see how certain
                social factors relate to homelessness, such as LGBTQ and gender
                identity.
              </div>
            </div>
          </div>
          <div className="twocolum">
            <div className="text">
              <div className="subHeader">Community</div>
              <div className="desc projp">
                One of the main features I wanted to highlight was the community
                page because of its importance to the application’s goal. The
                user would be allowed to flip through actual people and see
                their face as well as a small quote by them. This creates a
                greater personal connection while looking at their faces.
              </div>
            </div>
            <div className="hidimage">
              <img
                alt="community solution"
                src={require("../../images/Hid/final-comps-08.png")}
                className="myC-Grades"
              />
            </div>
          </div>
          <div className="mainTextWidth">
            {/* <Slider images={this.props.data.finalSlider} /> */}
          </div>
          <div id="partfive" className="sections mainTextWidth">
            <div className="projHeader">Conclusion</div>
            <div className="projp">
              <p>
                As someone who has experienced homelessness first hand, I put a
                lot of time and thought into the application. The main take away
                was to understand the homeless on a personal level and maybe
                even want to volunteer to help or even just meet with these
                people.
              </p>
              <p>
                Through the research process I was able to learn more about the
                individual lives of the homeless and also get a better
                understanding on each of their circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RRH;
