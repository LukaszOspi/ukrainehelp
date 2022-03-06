import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
  const { t } = useTranslation();

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
              {`${t("hero.welcome")} `}
              <span className="text-color-primary">ukraineaid</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                {`${t("hero.findInfo")}.`}
              </p>
              <p>{t("hero.helping")}</p>
              <p>
                <a href="https://goo.gl/maps/HqttvYu8Y4LPWv4q8">
                  {t("hero.firstContactAddress")}
                </a>
                {` - ${t("hero.arrival")}. `}
                <a href="https://www.berlin.de/laf/ankommen/#:~:text=Bitte%20melden%20Sie%20sich%20zun%C3%A4chst,Bonhoeffer%2DNervenklinik%20in%20Haus%202.">
                  {t("hero.cityInfo")}
                </a>
              </p>

              <p>{`${t("hero.questionnaires")}:`}</p>

              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://unterkunft-ukraine.de/request"
                  >
                    {t("hero.needAccommodation")}
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://unterkunft-ukraine.de/offer"
                  >
                    {t("hero.haveAccommodation")}
                  </Button>
                </ButtonGroup>
              </div>
              <p> </p>
              <div>
                <p>{`${t("hero.links")}:`}</p>
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/teamzob"
                  >
                    {t("hero.zob")}
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/BerlinHbfArrival"
                  >
                    {t("hero.hbf")}
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/teamsuedkreuz"
                  >
                    {t("hero.sued")}
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://t.me/arrivalostbahnhof"
                  >
                    {t("hero.ost")}
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
            <a href="https://ra.co/events/1508633">
              <Image
                className="has-shadow"
                src={require("./../../assets/images/soliparty.jpg")}
                alt="Soliparty"
                width={896}
                height={504}
              />
            </a>
            {/*             <a
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
        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
