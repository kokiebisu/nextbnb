import modal from "@modal/modal.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import responsive from "@styles/responsive.module.scss";

import { Button, $Button } from "@button";

/**
 * Renders the booking modal
 * @param {Object[]} availables - Lists all the available dates
 */
export const BookingModal: React.FC<{
  availables?: any;
}> = ({
  availables = [
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
  ],
}) => {
  const displayingAvailables = [...availables].splice(0, 3);
  return (
    <div
      className={[
        shape["w--full"],
        layout["inline-block"],
        modal["position__checkin--wrapper"],
      ].join(" ")}
    >
      <div>
        <div>
          <div>
            <span className={[space["p-v--10"], font["size--21"]].join(" ")}>
              <b
                className={[
                  font["weight--500"],
                  space["p-v--10"],
                  font["size--21"],
                ].join(" ")}
              >
                From $31
              </b>
            </span>
            <span> /person</span>
          </div>
          <div>
            <u
              className={[
                font["size--14"],
                font["weight--100"],
                color["c--gray__1"],
              ].join(" ")}
            >
              Show all prices
            </u>
          </div>
        </div>
        <div>input</div>
        <div className={[].join(" ")}>
          {displayingAvailables.map((available, index) => {
            return (
              <div
                key={index}
                className={[
                  responsive["b_to_f--lg"],
                  layout["justify-between"],
                  space["m-t--16"],
                ].join(" ")}
              >
                <div>
                  <div className={[space["m-b--6"]].join(" ")}>
                    <h3 className={[font["size--15"]].join(" ")}>
                      {available.date}
                    </h3>
                  </div>
                  <div>
                    <p className={[font["size--12"]].join(" ")}>
                      {available.from} - {available.to} {available.standard}
                    </p>
                  </div>
                  <div>
                    <u className={[font["size--12"]].join(" ")}>
                      Book for a private group
                    </u>
                  </div>
                </div>
                <div>
                  <div className={[space["m-v--4"]].join(" ")}>
                    <span className={[font["size--13"]].join(" ")}>
                      <b>${available.price}</b>
                    </span>
                    <span className={[font["size--13"]].join(" ")}>
                      {" "}
                      /person
                    </span>
                  </div>
                  <div>
                    <Button
                      variant={$Button.PRIMARY}
                      size="sm"
                      title="Choose"
                      spread
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={[space["m-t--24"]].join(" ")}>
          <div>
            <Button
              variant={$Button.BORDER}
              extendsTo={[color["bg--transparent"]].join(" ")}
              size="md"
              title="See more dates"
              block
            />
          </div>
        </div>
      </div>
    </div>
  );
};
