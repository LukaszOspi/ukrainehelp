import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Welcome to <span className="text-color-primary">ukraineaid</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Here you can find some information about how to help or how to
                GET help in Berlin, Germany or beyond. Please check our website
                regularly, the content is getting updated on a daily basis.
              </p>
              <p>
                If you are interested in helping to develop the website or have
                useful links, please contact through links on the bottom
                (instagram, telegram)
              </p>
              <p>
                <a href="https://goo.gl/maps/HqttvYu8Y4LPWv4q8">
                  First Contact Address
                </a>{" "}
                - go there after arrival into Berlin.{" "}
                <a href="https://www.berlin.de/laf/ankommen/#:~:text=Bitte%20melden%20Sie%20sich%20zun%C3%A4chst,Bonhoeffer%2DNervenklinik%20in%20Haus%202.">
                  Berlin City info in GER, UKR, RUS
                </a>
              </p>

              <p>
                Here are direct links to questionnaires to fill out (directly
                from unterkunft-ukraine.de):
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://unterkunft-ukraine.de/request"
                  >
                    I need accomodation
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://unterkunft-ukraine.de/offer"
                  >
                    I have accomodation
                  </Button>
                </ButtonGroup>
              </div>
              <p> </p>
              <div>
                <p>Here links to Telegram Groups in Berlin:</p>
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/teamzob"
                  >
                    Greet and Meet ZOB
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/BerlinHbfArrival"
                  >
                    Greet and Meet HBF
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/teamsuedkreuz"
                  >
                    Greet and Meet Südkreuz
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/arrivalostbahnhof"
                  >
                    Greet and Meet Ostbahnhof
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://www.youtube.com/watch?v=OP-R9uf5Nog"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/ukraina.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/682905671"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
