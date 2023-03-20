import React, { useEffect } from "react";
import "./../CSSmodules/About.css";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger, CustomEase } from "gsap/all";
import kamal from "./../assets/kamal.png";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".lol",
      {
        y: 160,
        x: 0,
        duration: 3,
      },
      {
        y: 0,
        x: -400,
        scrollTrigger: {
          trigger: ".lol",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".para",
      {
        y: 100,
      },
      {
        y: 0,

        duration: 1.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.2,0 0.48,0.279 0.514,0.522 0.584,1.032 0.822,1 1,1 "
        ),
        scrollTrigger: {
          trigger: ".para",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".imgka",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        duration: 5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.2,0 0.48,0.279 0.514,0.522 0.584,1.032 0.822,1 1,1 "
        ),
        scrollTrigger: {
          trigger: ".imgka",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".box",
      {
        y: 100,
        x: 500,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,

        duration: 5,

        scrollTrigger: {
          trigger: ".box",
          start: "top 100%",
          markers: true,
          end: "bottom 100%",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className="about">
      <div className="cont">
        <div className="lol" id="lool">
          ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-ABOUT-
        </div>
      </div>
      {/* <div className="contme">
        <div className="lol1" id="lool">
          ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-ME-
        </div>
      </div> */}

      <div className="flexwork">
        <div className="paradesc">
          <div className="paraa">
            <p className="para">
              I'm Kamal,a full stack developer, UI/UX designer, graphic designer
              and a former civil engineer. With a passion for
            </p>
          </div>
          <div className="paraa1">
            <p className="para">
              technology and design, I create robust, intuitive, and visually
              appealing websites and applications.
            </p>
          </div>
        </div>
        <div className="imgka">
          <div className="box"></div>
          <img src={kamal} alt="kamal" />
        </div>
      </div>
    </div>
  );
};

export default About;
