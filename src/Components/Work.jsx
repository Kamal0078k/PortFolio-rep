import React, { useEffect } from "react";
import "./../CSSmodules/Work.css";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger, CustomEase } from "gsap/all";

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
        },
      }
    );
  }, []);
  return (
    <div className="workbody">
      <div>
        <div className="title">
          <div id="work" className="workss">
            WORKS
          </div>
        </div>
        <div className="block"></div>
        <div className="oriworks">
          <div>
            <div className="heading">1.Gallery App</div>

            <div className="galldescription">
              A web application that allows users to create an account and store
              images. The application is built using React, Express.js, and
              MongoDB, which are all popular tools for building web
              applications.
            </div>
            <div className="galldescription">
              Once a user has created an account, they can upload images to the
              application, which are then stored in the MongoDB database. Users
              can view their own images and manage them, such as deleting or
              editing them.
            </div>
            <div className="galldescription">
              The application also allows users to share their images with other
              users by specifying the username of the recipient. The recipient
              will then be able to view the shared images in their own account.
            </div>
            <div className="galldescription">
              The use of React in the application allows for a smooth and
              responsive user interface, while Express.js handles the
              server-side logic and communicates with the MongoDB database to
              store and retrieve data.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
