/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import {
  CarbonMonoxideAlarm,
  Kitchen,
  PrivateEntrance,
  SmokeAlarm,
  Heating,
  TV,
} from "@svg/original";

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
export const AmenityBullet: React.FC<{
  amenityType?: string;
  title?: string;
  removed?: boolean;
}> = ({ amenityType = "kitchen", removed = false }) => {
  const amenityTypes = {
    smoke: { icon: <SmokeAlarm width={24} />, description: "Smoke alarm" },
    tv: { icon: <TV width={24} />, description: "TV" },
    kitchen: { icon: <Kitchen width={24} />, description: "Kitchen" },
    heating: { icon: <Heating width={24} />, description: "Heating" },
    entrance: {
      icon: <PrivateEntrance width={24} />,
      description: "Private entrance",
    },
    carbon: {
      icon: <CarbonMonoxideAlarm width={24} />,
      description: "Carbon monoxide alarm",
    },
  };
  return (
    <div
      className={[
        layout["flex"],
        layout["items-center"],
        space["p--4"],
        shape["w--50p"],
      ].join(" ")}
    >
      {amenityTypes[amenityType].icon}
      {removed ? (
        <s className={[space["m-l--16"], font["weight--100"]].join(" ")}>
          {amenityTypes[amenityType].description}
        </s>
      ) : (
        <p className={[space["m-l--16"], font["weight--100"]].join(" ")}>
          {amenityTypes[amenityType].description}
        </p>
      )}
    </div>
  );
};
