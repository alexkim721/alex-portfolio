import React, { Component } from "react";
import Slider from "../Projects/Slider";

class Hid extends Component {
  componentDidMount() {}
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
                The homeless population is at an absurdly high number of over
                500,000 people across the United States. Of that number, about
                200,000 are unsheltered.
              </p>
              <p>
                There is also a huge lack of sympathy towards the homeless
                population because of certain stereotypes and misunderstanding
                as well as public image and popular culture. Homeless people are
                becoming dehumanized and people are starting to bat their eyes
                without understanding what they do to survive and how to help.
              </p>
            </div>
          </div>
          <div id="parttwo" className="sections">
            <div className="projHeader mainTextWidth">Research</div>
            <div className="projp mainTextWidth">
              <p>
                My topic revolved on demographic information so I primarily
                directed my research on how people responded to graphs and
                charts. I also wanted a better understanding on how the general
                public viewed the homeless and what makes a person want to help.
              </p>
              <p>
                After gathering information on my subject matter, I found as I
                was looking through all of these number graphs and charts, there
                was never any mention about any homeless person as an
                individual. They were always covered by a generalized blanket
                statement, treating them as statistics rather than human beings.
              </p>
              <p>
                From this, I created 3 main goals I wanted to accomplish with
                the app:
              </p>
            </div>
            <div className="threegrid">
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 01"
                    src={require("../../images/Hid/goal-01.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp">
                    Educate the user on the large homeless population
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 02"
                    src={require("../../images/Hid/goal-02.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp">
                    Foster more empathy for the homeless and humanize them
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img
                    alt="Goal 03"
                    src={require("../../images/Hid/goal-03.png")}
                  />
                </div>
                <div className="text">
                  <div className="projp">Suggest ways for the user to help</div>
                </div>
              </div>
            </div>
          </div>
          <div id="partthree" className="sections mainTextWidth">
            <div className="projHeader">Design</div>
            <div className="projp">
              The design direction initially focused on the dark and gritty. I
              tried to hone the mood by using strong imagery, however it began
              to detract from the final goal which was to inform the user.
              Afterwards, I pulled away from all illustrations and tried to
              focus more on bringing the graphs and data alive. I represented
              each person as a dot, similarly to how society views them as just
              numbers, and told their story through layers of exploration.
            </div>
            <div className="singlecolumn">
              <img
                alt="boards"
                src={require("../../images/Hid/boards-02.png")}
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
            <div className="hidImage">
              <Slider images={this.props.data.slider01} />
            </div>
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
            <div className="hidImage">
              <Slider images={this.props.data.slider02} />
            </div>
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

export default Hid;
