import React, { useEffect } from "react";
import "./../CSSmodules/Work.css";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gall1 from "./../assets/gall1.png";
import gall2 from "./../assets/gall2.png";
import gall3 from "./../assets/gall3.png";

const Work = () => {
  const work = new SplitType("#work");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".char",
      {
        y: 200,
      },
      {
        y: 0,
        stagger: 0.05,
        delay: 0.05,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".char",
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".block",
      {
        width: 0,
      },
      {
        width: 290,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".block",

          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".gall1",

      {
        x: 300,
      },
      {
        x: 0,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".gall1",

          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".gall2",

      {
        x: -300,
      },
      {
        x: 0,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".gall2",

          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".gall3",

      {
        y: 300,
      },
      {
        y: 0,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".gall2",

          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="workbody">
      <div className="title">
        <div id="work" className="workss">
          WORKS
        </div>
      </div>
      <div className="block"></div>
      <div className="oriworks">
        <div>
          <div className="heading">1.Gallery App</div>
        </div>
        <div className="Gallery">
          <div className="gallimages">
            <img src={gall1} className="gall1" />
            <img src={gall2} className="gall2" />
            <img src={gall3} className="gall3" />
          </div>
          <div className="galldesc">HELOO im kamal from so and so</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
