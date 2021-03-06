import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import responsive from "@styles/responsive.module.scss";

import { Heart } from "@svg/original";

import { Bullet, $Bullet } from "@bullet";
import { ImageSlider } from "@particle/image.slider";
import { Card, $Card } from "@card";

/**
 * Renders the stay card component
 * @param {string[]} images - List of images to be displayed
 * @param {string} typeStay - Type of stay
 * @param {string} location - Location of the stay
 * @param {string} title - Title of the stay
 * @param {Object} accomodations - Information about the accomodations of the stay
 * @param {string[]} characteristics - List of characteristics
 */
export const StayCard: React.FC<{
  images?: string[];
  typeStay?: string;
  location?: string;
  title?: string;
  accomodations?: {
    guests: number;
    bedroom: number;
    beds: number;
    bath: number;
  };
  characteristics?: string[];
  ratings?: number;
  reviews?: number;
}> = ({
  images,
  typeStay = "Type of stay",
  location = "Location",
  title = "Title of stay",
  accomodations = {
    guests: 1,
    bedroom: 1,
    beds: 1,
    bath: 1,
  },
  characteristics = ["characteristic"],
}) => {
  return (
    <div>
      <div
        className={[responsive["b_to_n--sm"], space["m-b--32--sm"]].join(" ")}
      >
        <Card variant={$Card.HORIZONTAL} />
      </div>
      <div className={[responsive["n_to_b--sm"]].join(" ")}>
        <div className={[space["p-v--22"]].join(" ")}>
          <div
            className={[layout["flex"], layout["justify-between"]].join(" ")}
          >
            <div className={[layout["flex"]].join(" ")}>
              <div
                className={[
                  shape["w--300"],
                  shape["min-h--200"],
                  space["m-r--15"],
                ].join(" ")}
              >
                <div className={[shape["br--12"], shape["h--full"]].join(" ")}>
                  <ImageSlider slides={images} />
                </div>
              </div>
              <div
                className={[
                  layout["flex"],
                  layout["flex-col"],
                  layout["justify-between"],
                ].join(" ")}
              >
                <div>
                  <p
                    className={[color["c--gray__1"], font["size--14"]].join(
                      " "
                    )}
                  >
                    {typeStay} in {location}
                  </p>
                  <h4
                    className={[
                      font["weight--300"],
                      space["m-v--4"],
                      font["size--17"],
                    ].join(" ")}
                  >
                    {title}
                  </h4>
                  <div
                    className={[
                      color["bg--white__2"],
                      space["m-v--8"],
                      shape["w--45"],
                      shape["h--1"],
                    ].join(" ")}
                  ></div>
                  <div>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {accomodations.guests} guests
                    </span>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {" "}
                      ·{" "}
                    </span>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {accomodations.bedroom} bedroom
                    </span>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {" "}
                      ·{" "}
                    </span>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {accomodations.beds} beds
                    </span>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {" "}
                      ·{" "}
                    </span>
                    <span
                      className={[color["c--gray__1"], font["size--14"]].join(
                        " "
                      )}
                    >
                      {accomodations.bath} bath
                    </span>
                  </div>
                  <div>
                    {characteristics.map((characteristic, index) => {
                      return (
                        <span
                          key={index}
                          className={[
                            color["c--gray__1"],
                            font["size--14"],
                          ].join(" ")}
                        >
                          {characteristic}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Bullet variant={$Bullet.RATING} />
                </div>
              </div>
            </div>
            <div>
              <Heart fill="white" width={24} stroke="black" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
