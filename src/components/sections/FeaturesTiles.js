import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Tile from "../elements/Tile";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "HOW CAN YOU HELP",
    paragraph: "There is plenty of links here",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://www.google.com/maps/d/edit?mid=1HWGUIMiiMMhJY3QnTz3nXRMH8AZ85WHD&usp=sharing">
                      <Image
                        src={require("./../../assets/images/maps.jpg")}
                        alt="Google Maps"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Donate in Berlin</h4>
                  <p className="m-0 text-sm">
                    Places where you can go with your donation in Berlin on
                    Google Maps
                  </p>
                </div>
              </div>
            </div>
            {/* THIS IS WHERE TILE STARTS */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://t.me/+pY4AEUY_0jZhMzQ0">
                      <Image
                        src={require("./../../assets/images/ukraine-telegram.jpg")}
                        alt="Features tile icon 01"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Join Telegram Group</h4>
                  <p className="m-0 text-sm">
                    Click on the image to join the Telegram group for Ukrainians
                    that look for accomodation in Berlin
                  </p>
                </div>
              </div>
            </div>
            {/*  THIS IS WHERE TILE ENDS */}

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://t.me/UkrainiansinMuc">
                      <Image
                        src={require("./../../assets/images/ukraine-telegram.jpg")}
                        alt="Features tile icon 01"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Telegram group Munich</h4>
                  <p className="m-0 text-sm">
                    Click on the image to join the Telegram group for Ukrainians
                    that look for accomodation in Munich (München)
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://www.shelter4ua.com/">
                      <Image
                        src={require("./../../assets/images/shelter.png")}
                        alt="Shelter for UA"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Shelter for Ukraine</h4>
                  <p className="m-0 text-sm">
                    New website for shelters, both for those who seek and those
                    who offer.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://unterkunft-ukraine.de/">
                      <Image
                        src={require("./../../assets/images/ukraina.jpg")}
                        alt="Unterkunft Ukraine"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Unterkunft Ukraine</h4>
                  <p className="m-0 text-sm">
                    Berlin based website for housing - both offers and requests.
                    In co-operation with GLS Bank and Ecosia, probably data
                    protection compliant.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fd%2Fviewer%3Fmid%3D168CYAtRoeK_YIEnD8PJm6dx17d09xrSN%26ll%3D54.05100947195975%252C20.161707266223132%26z%3D14%26fbclid%3DIwAR3eviSKVLu3arkXHMbydLKV0q7UxKmpvSZeSuAKOA2HxBu06BlqqwdIt1Y&h=AT38WA18qfZ9AwXbDIJ8FnFDgji_DJm1Zo9nOR4pdbnnSpfbEu6caW9GuTT4AlddVK7aKGM6qi-tqaSzkZ6hhEr-8CK1D-4lZo3gFvoNdiyIIVngcBH6RCEtxNV6k4nzSZLp-mWw1w&__tn__=R]-R&c[0]=AT0UbpC8HW8f__Zr23HdK0OEiCs7T7Pfbma2UuDDXxnxXMfsr3zJQIEiFOl5_K7cpZfYAvNvBZ-7JGUUutdKmoKAfRXnmLL4vFt-EdQRKHkoGVbwdBKKyIUKE48vuCpJnrDLC8-JhC_V4if5kPdiU7fRtuE">
                      <Image
                        src={require("./../../assets/images/maps.jpg")}
                        alt="Polish Homes"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Polish Homes</h4>
                  <p className="m-0 text-sm">
                    Provisional map of hommes offering accomodation IN POLAND
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://linktr.ee/ukrainehelpberlin">
                      <Image
                        src={require("./../../assets/images/ukraina.jpg")}
                        alt="Ukraine Help Berlin"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Ukraine Help Berlin</h4>
                  <p className="m-0 text-sm">
                    Website of Berlin organisation for Ukrainian people, with
                    loads of ressources
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://pomagamukrainie.gov.pl/">
                      <Image
                        src={require("./../../assets/images/ukraina.jpg")}
                        alt="Pomagam Ukrainie"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Pomagam Ukrainie</h4>
                  <p className="m-0 text-sm">
                    Polish government website for both those who want to help
                    and those who need help (UKRAINIAN LANGUAGE)
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://ukraina.services/">
                      <Image
                        src={require("./../../assets/images/ukraina.jpg")}
                        alt="Ukraina Services"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Ukraina Services (PL)</h4>
                  <p className="m-0 text-sm">
                    Website in Polish, English and Ukrainian summarizing
                    possibilities available in Poland
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://docs.google.com/document/d/14dfDMEOIEpuQGeD7y1Y-MOgrhNlXeCV7FlXKTl3cmNA/edit?usp=sharing">
                      <Image
                        src={require("./../../assets/images/ukraina.jpg")}
                        alt="Document UKR"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Document in Ukrainian</h4>
                  <p className="m-0 text-sm">
                    15 pages of a document in Ukrainian language with all
                    important information for refugees
                  </p>
                </div>
              </div>
            </div>

            {/*        <div>
              <Tile
                picture="./../../assets/images/oxana.jpg"
                url="https://www.facebook.com/oksana.levytska.5/posts/10217961595026019"
                alt="Facebook code"
                h="150"
                w="150"
                title="Private person collecting donations"
                text="Contact on facebook to a person that collects physical
                          donations from your home."
              />
            </div> */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://t.me/ukrasylumrefugee">
                      <Image
                        src={require("./../../assets/images/law_help.jpg")}
                        alt="Law Help"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Lawyer's help</h4>
                  <p className="m-0 text-sm">
                    If you are looking for legal advice
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://t.me/+KUk3d_a3w7dkYWI0">
                      <Image
                        src={require("./../../assets/images/paris.jpg")}
                        alt="Image of Paris"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Paris Telegram</h4>
                  <p className="m-0 text-sm">
                    Join the Telegram Group for helpers in Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://www.berlin.de/einwanderung/ueber-uns/aktuelles/artikel.1180210.php">
                      <Image
                        src={require("./../../assets/images/berlin.jpg")}
                        alt="Logo of City Berlin"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Official Information for Ukrainian Citizens{" "}
                  </h4>
                  <p className="m-0 text-sm">
                    Website from Berlin City in German, English and Ukrainian
                    providing informations about current rules and help offered
                    by state and city itself.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://pomagamukrainie.gov.pl/">
                      <Image
                        src={require("./../../assets/images/godlo_polski.png")}
                        alt="Polish national sign"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Polish website for Ukrainian Refugees{" "}
                  </h4>
                  <p className="m-0 text-sm">
                    Available in both Polish and Ukrainian. For those in Poland
                    and Ukraine, who want to help and need help.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://www.gzf-berlin.org/?fbclid=IwAR128T4x6WIKTe0p-3KPgNdDaRLv-yLtSYnfvoJYToSNxMvZ6dmSqlxytxE">
                      <Image
                        src={require("./../../assets/images/gzf_logo.png")}
                        alt="GZF Logo"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Healt Centre for Refugees </h4>
                  <p className="m-0 text-sm">
                    Go-to place for psychological help dedicated to refugees.
                    Website in German.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="https://tomaas.notion.site/Information-for-Ukrainians-0233533f1507494e92505f89a26aeba5">
                      <Image
                        src={require("./../../assets/images/info_add.jpg")}
                        alt="Tomaas Website Notion"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Additional Information</h4>
                  <p className="m-0 text-sm">
                    External Website with additional information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
