import React, { useEffect } from "react";
import gsap from "gsap";
import "./../CSSmodules/Contact.css";
import { ScrollTrigger, CustomEase } from "gsap/all";
const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".contheading",
      {
        y: 160,
        x: 0,
        duration: 3,
      },
      {
        y: 0,
        x: -400,
        scrollTrigger: {
          trigger: ".contheading",
          start: "top 90%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="contact">
      <div className="conttitle">
        <div className="contheading">
          CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-CONTACT-
        </div>
      </div>{" "}
      <div className="contddet">
        <div className="det">saikamal0078@gmail.com</div>
        <div className="det">
          <a
            href="https://www.linkedin.com/in/kamal-arukala-08534b173/"
            className="linkcol"
            target="blank"
          >
            LINKDEIN
          </a>
        </div>
        <div className="det">
          <a
            href="https://www.instagram.com/kamal_arukala/"
            className="linkcol"
            target="blank"
          >
            INSTAGRAM
          </a>
        </div>
        <div className="det">
          <a
            href="https://github.com/Kamal0078k"
            className="linkcol"
            target="blank"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
