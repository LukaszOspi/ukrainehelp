import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Tile from "../elements/Tile";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

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
                      Tips
                    </div>
                    <h3 className="mt-0 mb-12">{t("tips.title")}</h3>
                    <p className="m-0">
                      1. Spenden:
                      <p>
                        • Vertrauenswürdige Organisationen, die gerade die
                        Ukraine unterstützen, an die oder über die man spenden
                        kann:{" "}
                        <a href="https://docs.google.com/document/d/11cO5DaZm8xxz0_o7RuPObsrfkPBXGsEW/edit?usp=sharing&ouid=107866144349041787881&rtpof=true&sd=true">
                          LINK TO GOOGLE DOC
                        </a>
                      </p>
                      <p>
                        • Bittet in eurem Café/eurer Bäckerei darum, ein
                        Spendenkörbchen aufstellen zu dürfen. Viele machen gerne
                        mit. Funktioniert an jedem Ort und in jeder Stadt, ist
                        einfach und effektiv.
                      </p>
                    </p>
                    <p>
                      {""}
                      2. Sachspenden in Berlin Jeden Tag zwischen 10 und 18 Uhr
                      kann man im{" "}
                      <a href="https://goo.gl/maps/3eMUR7fezam5ZnwH6">
                        Pilecki-Institut am Pariser Platz 4a
                      </a>{" "}
                      Hilfsgüter für die Ukraine abgeben. Es wird darum gebeten,
                      eine Liste mit den Hilfsgütern mitzubringen, da dies enorm
                      bei der Logistik hilft. Besonders wichtig:{" "}
                      <ul>
                        <li>Thermo-Unterwäsche und -Kleidung, Fleece</li>
                        <li> Kleidung im Allgemeinen </li>
                        <li> Thermoskannen, -flaschen</li>
                        <li> Lebensmittelkonserven </li>
                        <li> Powerbanks</li>
                        <li>Camping-Gasheizer/-öfen</li>
                        <li>Taschenlampen, Kopflampen</li>
                        <li>
                          Medizin (Adrenalin, Dexamethasone, Hemotran,
                          Hemostatic)
                        </li>
                        <li> Blutstillende Mittel</li>
                        <li>
                          Verbandszeug (Bandagen, Tamponaden, Pflaster, etc.)
                        </li>
                        <li> Schmerzmittel</li>
                        <li> Scheren mit stumpfen Enden</li>
                      </ul>
                    </p>
                    <p>
                      3. Demonstrieren / Solidarität Zeigen: Heute haben wir den
                      Ukrainer*innen schon gezeigt, dass wir nicht gleichgültig
                      sind. Macht so weiter und geht zur nächsten Demonstration
                      in eurer Nähe! Demo-Überblick:{" "}
                      <a href="https://standwithukraine.live/">
                        https://standwithukraine.live/
                      </a>{" "}
                    </p>
                    <p>
                      4. Ehrenamtlich übersetzen oder dolmetschen (ru/ukr –
                      en/dt) Mein Kommilitone Slava Obodzinskiy baut eine
                      Datenbank auf:{" "}
                      <a href="https://survey.lamapoll.de/Translators">
                        https://survey.lamapoll.de/Translators
                      </a>{" "}
                    </p>
                    <p>
                      5. Eine Unterkunft anbieten • Wohnraum für Geflüchtete
                      (auch provisorisch für einen begrenzten Zeitraum):{" "}
                      <a href="https://elinor.network/gastfreundschaft-ukraine/">
                        https://elinor.network/gastfreundschaft-ukraine/
                      </a>{" "}
                      • Fragt beim örtlichen Flüchtlingsrat nach, womit ihr
                      helfen könnt
                    </p>
                    <p>
                      6. Meldet euch: Kontaktiert eure Freund*innen oder
                      Bekannten in/aus der Ukraine und sagt, dass ihr an Sie
                      denkt und bietet eure Hilfe an. Macht das gleiche mit
                      Freund*innen aus Belarus und Russland. Es ist nicht
                      leicht, dort mutig zu sein und sich gegen den Krieg zu
                      positionieren.
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
