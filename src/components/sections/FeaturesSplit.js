import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  FACEBOOK INITIATIVES
                </div>
                <h3 className="mt-0 mb-12"></h3>
                <p className="m-0">
                  <div className="tiles-item reveal-from-bottom">
                    <div className="tiles-item-inner">
                      <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                          <a href="https://www.facebook.com/oksana.levytska.5/posts/10217961595026019">
                            <Image
                              src={require("./../../assets/images/oxana.jpg")}
                              alt="Facebook code"
                              width={150}
                              height={150}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">
                          Private person collecting donations{" "}
                        </h4>
                        <p className="m-0 text-sm">
                          Contact on facebook to a person that collects physical
                          donations from your home.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tiles-item reveal-from-bottom">
                    <div className="tiles-item-inner">
                      <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                          <a href="https://www.instagram.com/helpbus/">
                            <Image
                              src={require("./../../assets/images/helpbus.png")}
                              alt="Helpbus"
                              width={150}
                              height={150}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">Helpbus </h4>
                        <p className="m-0 text-sm">
                          Instagram profile for buses that pick up refugees at
                          the border Poland - Ukraine.
                        </p>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/*     <Image
                  src={require("./../../assets/images/features-split-image-01.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>

            {/* THIS IS THE PLACE WHERE I PUT NEW DIV TO HAVE IT IN ONE LINE */}
            <div></div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Tips
                </div>
                <h3 className="mt-0 mb-12">Additional Information</h3>
                <p className="m-0">
                  1) Currently, Ukrainians with an biometric passport can enter
                  Germany without a visa for 90days in a 180 day period. Berlin
                  decided the following:, the visa free stay is extended until
                  31.05.2022! This means, that Ukrainians holding a biometric
                  passport can stay in Germany. In all states in Germany that do
                  not have this rule, Ukrainians have to apply for an extension
                  of the visa free stay at the local immigration office.
                </p>
                <p>
                  {""}
                  If you seek Asylum, please keep in mind the following: 2)
                  applicants who gave their biometric data (finger prints) to
                  the border police of another European state they travelled
                  through, might need to relocate to that state due to the
                  Dublin Regulation until the first contact state decides on the
                  application.
                </p>
                <p>
                  3) Asylum applicants that stay in Germany will be distributed
                  to a first reception facility which might not be in Berlin.{" "}
                </p>
                <p>
                  4) you can apply for Asylum right away or you could also
                  consult a migration lawyer before you do so.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/*   <Image
                  src={require("./../../assets/images/features-split-image-02.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/*           <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Data-driven insights</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/*       <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
