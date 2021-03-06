/** styles **/
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import card from "@card/card.module.scss";

/** Logic */
import { renderSize } from "./logic/logic.nearby";

/**
 * Renders the nearby card component
 * @param {string} imgUrl - Image of the card
 * @param {string} city - Name of the city
 * @param {number} hours - Time it takes to reach the destination
 * @param {string} size - Size of the component
 */
export const NearbyCard: React.FC<{
  imgUrl?: string;
  city?: string;
  hours?: number;
  size?: "sm" | "lg";
}> = ({ imgUrl, city = "City", hours = 1, size = "sm" }) => {
  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div
        className={`${renderSize(card, size)} ${[space["m-r--12"]].join(" ")}`}
      >
        {imgUrl ? (
          <img src={imgUrl} style={{ borderRadius: 10 }} />
        ) : (
          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "lightgray",
            }}
          />
        )}
      </div>
      <div>
        <h3 className={[font["size--15"], space["m-b--4"]].join(" ")}>
          {city}
        </h3>
        <p className={[font["size--15"]].join(" ")}>{hours} hour drive</p>
      </div>
    </div>
  );
};
