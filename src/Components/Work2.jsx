import React, { useEffect } from "react";
import "./../CSSmodules/Work2.css";
import first from "./../assets/unpfi.png";
import middle from "./../assets/unpmid.png";
import third from "./../assets/unpth.png";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gsap from "gsap";
const Work2 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".unp1",
      {
        x: 300,
      },
      {
        x: 0,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".unp1",
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".unp2",
      {
        x: -300,
      },
      {
        x: 0,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".unp2",
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".unp3",

      {
        y: 200,
      },
      {
        y: 0,

        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".unp3",
          start: "top 100%",

          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="work2">
        <div className="work2titl">2.Unplugged</div>
        <div className="unpimages">
          <img src={first} className="unp1" />
          <img src={middle} className="unp3" />
          <img src={third} className="unp2" />
        </div>
      </div>
    </>
  );
};

export default Work2;
