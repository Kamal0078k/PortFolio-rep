import React, { useEffect } from "react";
import { gsap } from "gsap";
import classes from "./../CSSmodules/Hero.module.css";
import ReactCurvedText from "react-curved-text";
import SplitType from "split-type";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className={classes.hero}>
        <div className={classes.black}>
          <div className={classes.welc}>
            <div>W</div>
            <div>e</div>
            <div>l</div>
            <div>c</div>
            <div>o</div>
            <div>m</div>
            <div>e</div>
            <div>!</div>
          </div>
        </div>
        <div className={classes.header}>
          <Header />
        </div>

        <div className={classes.gap}>
          <div className={classes.role}>
            <div className={classes.rolde}>
              <div className={classes.move}>
                <div className={classes.fsd}>
                  FULLSTACKDEVELOPER-UI/UX-<span>GRAPHICDESIGNER</span>
                  -FULLSTACKDEVELOPER-UI/UX-<span>GRAPHICDESIGNER</span>
                  -FULLSTACKDEVELOPER-UI/UX-GRAPHICDESIGNER-
                </div>
              </div>
            </div>
            <div className={classes.rolde2}>
              <div className={classes.move}>
                <div className={classes.fsd1}>
                  GRAPHICDESIGNER-<span>FULLSTACKDEVELOPER</span>
                  -UI/UX-GRAPHICDESIGNER-<span>FULLSTACKDEVELOPER</span>
                  -UI/UX-GRAPHICDESIGNER-FULLSTACKDEVELOPER-UI/UX-
                </div>
              </div>
            </div>

            <div className={classes.rolde3}>
              <div className={classes.move}>
                <div className={classes.fsd2}>
                  UI/UX-GRAPHICDESIGNER<span>-FULLSTACKDEVELOPER-</span>
                  UI/UX-GRAPHICDESIGNER-<span>FULLSTACKDEVELOPER</span>
                  -UI/UX-GRAPHICDESIGNER-FULLSTACKDEVELOPER-
                </div>
              </div>
            </div>
            <div className={classes.rolde4}>
              <div className={classes.move}>
                <div className={classes.fsd3}>
                  GRAPHICDESIGNER-FULLSTACKDEVELOPER-<span>UI/UX</span>
                  -GRAPHICDESIGNER-FULLSTACKDEVELOPER-<span>UI/UX</span>
                  -GRAPHICDESIGNER-FULLSTACKDEVELOPER-UI/UX-
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.intro}>
          <div>THEY CALL ME</div>
        </div>
        <div className={classes.middle}>
          <div className={classes.name}>
            <div>K</div>
            <div>A</div>
            <div>M</div>
            <div>A</div>
            <div>L</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
