import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Tile from "../elements/Tile";
import { useTranslation } from "react-i18next";
import featuresTilesContent from "../../content/featuresTiles.json";

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
  const { t } = useTranslation();

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
    title: t("featuresTiles.title"),
    paragraph: t("featuresTiles.paragraph"),
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {featuresTilesContent.tiles.map((tile, i) => (
              <Tile
                key={`${tile.id}-${i}`}
                url={tile.url}
                /* since we are not using something like webpack it's easier to import
                images in this way (we don't know if they are .jpg, .png or something else) */
                picture={require(`../../assets/images/${tile.pictureName}`)}
                alt={t(`featuresTiles.${tile.id}.alt`)}
                title={t(`featuresTiles.${tile.id}.title`)}
                text={t(`featuresTiles.${tile.id}.text`)}
                w={100}
                h={100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
