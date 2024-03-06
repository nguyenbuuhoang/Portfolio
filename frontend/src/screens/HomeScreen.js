import React, { useState, useEffect } from "react";
import Section from "../components/section/section";
import Header from "../components/header/header";
import { Link } from "react-router-dom";
import ContactComponent from "../components/contactComponent/ContactComponent.js";
import axios from "axios"; // Thêm dòng này để import axios
import { RecentWeb } from "../components/recentComponent/RecentWeb.js";

function HomeScreen(props) {
  const [webs, setWebs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/webs");
        setLoading(false);
        setWebs(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
      {/* Header */}
      <Header bgColor={isScrolled ? "white" : "black"}></Header>
      {/* HOME SCREEN */}
      <div className="Mainbackground" id="home">
        <div className="topBackground"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001517"
            fillopacity="1"
            d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div className="container fluids">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="screenWords">
                <h1>Hello, I'm Hoang.</h1>
                <p>
                  I'm a Backend developer specializing in crafting
                  outstanding, cutting-edge and websites. Please feel free to
                  explore my latest projects. You can contact me at
                  buuhoanglx@gmail.com or via phone at +84 397084144.
                </p>
                <div className="twoMainButton">
                  <div className="buttonMain">
                    <a href="nguyenbuuhoang_cv.pdf" download>
                      Download CV
                    </a>
                  </div>
                  <div className="buttonMain">
                    <Link to="/website">All Websites</Link>
                    <div className="hrizontalLine diff"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="screenImage">
                <img src="./images/main2.png" alt="irene blog" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section */}
      <Section></Section>
      {/* About */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="aboutMeImg">
                    <img src="images/gifs/about.jpg" alt="about me" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me">
                    <h5>About me</h5>
                    <div className="aboutHorizontalLine"></div>
                    <p>
                      With my experience and expertise, I aim to create
                      compelling experiences on the internet. My primary goal is
                      to develop products that deliver comprehensive experiences
                      and high performance for users.
                    </p>
                    <p>
                      I have a deep understanding of Front End programming
                      languages such as HTML, CSS, as well as frameworks like
                      ReactJS, Vuejs, and jQuery. Additionally, I possess
                      backend programming skills with Node.js and PHP, using
                      frameworks like Express.js and Laravel to build powerful
                      and flexible web applications.
                    </p>
                    <p>
                      Furthermore, I am proficient in deploying, managing, and
                      operating systems on the Amazon server platform (AWS),
                      including using services such as EC2, RDS, and S3 to
                      ensure smooth and secure operation of web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <div className="contactme" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="form">
              <ContactComponent></ContactComponent>
            </div>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="container" id="works">
        <div className="article">
          <h2>Recent Work</h2>
          <hr />
          <div className="rows">
            {webs.slice(0, 2).map((website) => (
              <RecentWeb key={website._id} website={website}></RecentWeb>
            ))}
            ;
          </div>
        </div>
      </div>
      {/* HOME SCREEN END */}
    </>
  );
}

export default HomeScreen;
