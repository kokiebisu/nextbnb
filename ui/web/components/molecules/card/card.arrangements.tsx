/** styles **/
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

/** vectors */
import { DoubleBed } from "@svg/original";

/**
 * Renders the arrangements card component
 * @param {Object} card - Information of the card
 */
export const ArrangementsCard: React.FC<{ card?: any }> = ({
  card = {
    type: "Bedroom",
    beds: [{ type: "double bed", count: 1 }],
  },
}) => {
  return (
    <div
      className={[
        shape["w--48"],
        space["p-v--25"],
        color["b--white__2"],
        shape["br--15"],
        shape["w--200"],
      ].join(" ")}
    >
      <div className={[space["p-l--14"]].join(" ")}>
        <div className={[space["p-t--4"], space["p-b--8"]].join(" ")}>
          <DoubleBed width={24} />
        </div>
        <p className={[space["p-t--4"], color["c--gray__2"]].join(" ")}>
          Bedroom
        </p>
        <div>
          {card.beds.map((bed, index) => {
            return (
              <p key={index} className={[color["c--gray__2"]].join(" ")}>
                {bed.count} {bed.type}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
