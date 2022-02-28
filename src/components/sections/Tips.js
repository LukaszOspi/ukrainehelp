import React from "react";
import Header from "../layout/Header";

const Tips = () => {
  return (
    <>
      <div>{Header}</div>
      <div className="split-item">
        <div
          className="split-item-content center-content-mobile reveal-from-right"
          data-reveal-container=".split-item"
        >
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            Tips
          </div>
          <h3 className="mt-0 mb-12">Tips and Links</h3>
          <p className="m-0">
            1. Spenden: • Vertrauenswürdige Organisationen, die gerade die
            Ukraine unterstützen, an die oder über die man spenden kann (Danke
            Mona Richter):
            <a href="https://docs.google.com/document/d/11cO5DaZm8xxz0_o7RuPObsrfkPBXGsEW/edit?usp=sharing&ouid=107866144349041787881&rtpof=true&sd=true">
              LINK TO GOOGLE DOC
            </a>
            • Bittet in eurem Café/eurer Bäckerei darum, ein Spendenkörbchen
            aufstellen zu dürfen. Viele machen gerne mit. Funktioniert an jedem
            Ort und in jeder Stadt, ist einfach und effektiv.
          </p>
          <p>
            {""}
            2. Sachspenden in Berlin Jeden Tag zwischen 10 und 18 Uhr kann man
            im Pilecki-Institut am Pariser Platz 4a Hilfsgüter für die Ukraine
            abgeben. Es wird darum gebeten, eine Liste mit den Hilfsgütern
            mitzubringen, da dies enorm bei der Logistik hilft. Besonders
            wichtig: • Thermo-Unterwäsche und -Kleidung, Fleece • Kleidung im
            Allgemeinen • Thermoskannen, -flaschen • Lebensmittelkonserven •
            Powerbanks • Camping-Gasheizer/-öfen • Taschenlampen, Kopflampen •
            Medizin (Adrenalin, Dexamethasone, Hemotran, Hemostatic •
            Verbandszeug (Bandagen, Tamponaden, Pflaster, etc.) • Blutstillende
            Mittel • Schmerzmittel • Scheren mit stumpfen Enden
          </p>
          <p>
            3. Demonstrieren / Solidarität Zeigen: Heute haben wir den
            Ukrainer*innen schon gezeigt, dass wir nicht gleichgültig sind.
            Macht so weiter und geht zur nächsten Demonstration in eurer Nähe!
            Demo-Überblick: https://standwithukraine.live/{" "}
          </p>
          <p>
            4. Ehrenamtlich übersetzen oder dolmetschen (ru/ukr – en/dt) Mein
            Kommilitone Slava Obodzinskiy baut eine Datenbank auf:
            https://survey.lamapoll.de/Translators
          </p>
          <p>
            5. Eine Unterkunft anbieten • Wohnraum für Geflüchtete (auch
            provisorisch für einen begrenzten Zeitraum):
            https://elinor.network/gastfreundschaft-ukraine/; • Fragt beim
            örtlichen Flüchtlingsrat nach, womit ihr helfen könnt
          </p>
          <p>
            6. Meldet euch: Kontaktiert eure Freund*innen oder Bekannten in/aus
            der Ukraine und sagt, dass ihr an Sie denkt und bietet eure Hilfe
            an. Macht das gleiche mit Freund*innen aus Belarus und Russland. Es
            ist nicht leicht, dort mutig zu sein und sich gegen den Krieg zu
            positionieren.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tips;
