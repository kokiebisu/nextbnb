/** styles **/
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import { Warning } from "@svg/original";

export const AgainCard: React.FC<{}> = () => {
  return (
    <div className={[shape["br--15"], color["b--white__2"]].join(" ")}>
      <div className={[space["p--18"]].join(" ")}>
        <div className={[layout["flex"]].join(" ")}>
          <div className={[space["m-r--12"]].join(" ")}>
            <div
              className={[
                space["p--12"],
                shape["br--circle"],
                color["bg--red__2"],
              ].join(" ")}
            >
              <Warning width={18} fill="white" />
            </div>
          </div>
          <div>
            <div className={[space["m-b--4"]].join(" ")}>
              <h3 className={[font["size--16"]].join(" ")}>
                Let's try that again
              </h3>
            </div>
            <div>
              <p className={[font["size--14"], color["c--gray__1"]].join(" ")}>
                There isn’t an account associated with this email address.
                Please try another email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
