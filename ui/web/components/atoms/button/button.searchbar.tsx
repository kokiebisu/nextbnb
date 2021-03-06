import { motion } from "framer-motion";

/** styles */
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import animation from "@styles/animation.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import { MagnifyGlass } from "@svg/original";

/**
 * Renders the searchbar button component
 * @param {boolean} mini - Whether if the button is the minified version or not
 */
export const SearchbarButton: React.FC<{ mini?: boolean }> = ({
  mini = false,
}) => {
  const handlePress = () => {
    alert("searchbar button clicked");
  };
  return (
    <>
      {mini ? (
        <div
          style={{ width: "100%", height: 45 }}
          className={[
            space["p-v--15"],
            space["p-l--18"],
            space["p-r--8"],
            layout["flex"],
            layout["items-center"],
            layout["justify-between"],
            color["b--white__3"],
            shape["br--30"],
          ].join(" ")}
        >
          <div>
            <p
              className={[
                font["no-wrap"],
                font["size--14"],
                font["weight--500"],
              ].join(" ")}
            >
              Start your search
            </p>
          </div>
          <div>
            <div
              className={[color["bg--primary"], layout["all-center"]].join(" ")}
              style={{
                borderRadius: "50%",
                height: 30,
                width: 30,
              }}
            >
              <MagnifyGlass
                width={12}
                height={12}
                stroke="white"
                strokeWidth={6}
              />
            </div>
          </div>
        </div>
      ) : (
        <motion.button
          whileTap={{ scale: 0.98 }}
          data-testid="button"
          className={[
            shape["w--full"],
            shape["br--25"],
            color["bg--white"],
            color["b--white__2"],
            animation["hover-shadow--sm"],
            shape["shadow--sm"],
          ].join(" ")}
          onClick={handlePress}
        >
          <div
            className={[
              space["p-v--12"],
              space["p-l--18"],
              space["p-r--8"],
              layout["all-center"],
            ].join(" ")}
          >
            <div className={[space["m-r--12"]].join(" ")}>
              <MagnifyGlass width={15} stroke="black" strokeWidth={4} />
            </div>
            <div
              className={[
                font["weight--100"],
                font["size--15"],
                color["c--gray__0"],
              ].join(" ")}
            >
              Search stays
            </div>
          </div>
        </motion.button>
      )}
    </>
  );
};
