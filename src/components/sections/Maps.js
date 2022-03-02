import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Tile from "../elements/Tile";
import Header from "../layout/Header";

// This file's purpose is to have a sub-site ready to use with easy content pasting

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Tips = ({
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
                <div>{Header}</div>
                <div className="split-item">
                  <div
                    className="split-item-content center-content-mobile reveal-from-right"
                    data-reveal-container=".split-item"
                  >
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                      Google Map - Donation
                    </div>
                    <h3 className="mt-0 mb-12">
                      Map of places where you can donate in Berlin
                    </h3>
                    <p className="m-0">
                      {" "}
                      <iframe
                        title="Donation Map for Berlin"
                        src="https://www.google.com/maps/d/embed?mid=1HWGUIMiiMMhJY3QnTz3nXRMH8AZ85WHD&ehbc=2E312F"
                        width="640"
                        height="480"
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
