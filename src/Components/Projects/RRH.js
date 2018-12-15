import React, { Component } from "react";

class RRH extends Component {
  componentDidMount() {}
  color = () => {
    const style = {
      color: this.props.data.color
    };
    return style;
  };
  bgcolor = () => {
    const style = {
      backgroundColor: this.props.data.color
    };
    return style;
  };

  render() {
    return (
      <div className="main" id="RRH">
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
            Our main goal was to simplify navigating a hospital while fostering
            a friendlier vibe for the user. Using fun and simple animations
            while keeping in mind where UI lived in the space, we were able to
            create an enjoyable navigation experience.
          </div>
          <div className="singlecolumn rrhpitch" style={this.bgcolor()}>
            <div className="pitchVidRRH">
              <video
                src={require("../../images/RRH/final-pitch-vid.mp4")}
                type="video/mp4"
                controls
              />
            </div>
          </div>
          <div className="twocolum">
            <div className="iphoneMock">
              <img
                alt="iphone mock"
                src={require("../../images/iphone-mock.png")}
                className="iphone"
              />
              <video
                src={require("../../images/RRH/onboarding-vid.mp4")}
                type="video/mp4"
                className="phone"
                loop
                controls
              />
            </div>
            <div className="text">
              <div className="subHeader">Onboarding</div>
              <div className="desc projp">
                The introduction to the app should be simple, friendly and not
                overwhelming. By on boarding the user from the start, we are
                giving the user information about the application as well as a
                simplified instruction on what to do after downloading the app.
                This way the user wont download the app and get confused on what
                to do next.
              </div>
            </div>
          </div>
          <div className="twocolum reverse">
            <div className="text">
              <div className="subHeader">Patient Status</div>
              <div className="desc projp">
                The user will always have quick access to the patients status by
                entering a menu on the bottom. With that information on their
                fingertips, they can quickly deduce where their patient is and
                their current status as well as personalized information of the
                visitor, such as parking information and available coupons
                available for use.
              </div>
            </div>
            <div className="iphoneMock">
              <img
                alt="iphone mock"
                src={require("../../images/iphone-mock.png")}
                className="iphone"
              />
              <video
                src={require("../../images/RRH/patient-status-vid.mp4")}
                type="video/mp4"
                className="phone"
                loop
                controls
              />
            </div>
          </div>
          <div className="twocolum">
            <div className="iphoneMock">
              <img
                alt="iphone mock"
                src={require("../../images/iphone-mock.png")}
                className="iphone"
              />
              <video
                src={require("../../images/RRH/navigate-vid.mp4")}
                type="video/mp4"
                className="phone"
                loop
                controls
              />
            </div>
            <div className="text">
              <div className="subHeader">Alternative Destinations</div>
              <div className="desc projp">
                The user will always have control on where they are going. There
                will be an option that will allow for the user to explore other
                locations with-in the hospital, whether it be the nearest
                cafeteria or bathroom. Then it will automatically reroute the
                user to the selected destination.
              </div>
            </div>
          </div>
          <div className="twocolum reverse">
            <div className="text">
              <div className="subHeader">User Incentives</div>
              <div className="desc projp">
                Throughout the visit users will be provided with coupons to
                further enhance their hospital experience. This will also give a
                user a desire to download and use the app.
              </div>
            </div>
            <div className="iphoneMock">
              <img
                alt="iphone mock"
                src={require("../../images/iphone-mock.png")}
                className="iphone"
              />
              <video
                src={require("../../images/RRH/user-incentive-vid.mp4")}
                type="video/mp4"
                className="phone"
                loop
                controls
              />
            </div>
          </div>
          <div className="singlecolumn" style={this.bgcolor()}>
            <img
              alt="boards"
              class="finalScreens"
              src={require("../../images/RRH/final-comps.png")}
            />
          </div>
          <div id="partfive" className="sections mainTextWidth">
            <div className="projHeader">Conclusion</div>
            <div className="projp">
              <p>
                I think that everyone can agree that visiting a hospital is
                stressful. By creating this application, I wanted to understand
                that process better and try to create an experience that is more
                enjoyable. It also allowed me to practice my UI animation and
                prototyping.
              </p>
              <p>
                None of this would have been possible without my teammates{" "}
                <a
                  href="http://www.madisonyocum.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Madison Yocum
                </a>{" "}
                and{" "}
                <a
                  href="http://victoriabragg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Victoria Bragg
                </a>{" "}
                so swing by their portfolio to see their work!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RRH;
