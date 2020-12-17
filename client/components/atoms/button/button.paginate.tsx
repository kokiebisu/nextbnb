import React from "react";
import { motion } from "framer-motion";

/** styles **/
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import button from "./button.module.scss";

/** vectors */
import { ChevronLeft, ChevronRight } from "../../../public/svg/regular";

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */
export const PaginateButton: React.FC<{
  direction?: string;
  disable?: boolean;
}> = ({ direction = "left", disable = false }) => {
  const icons = {
    left: (
      <ChevronLeft
        width={10}
        stroke={`${disable ? "lightgray" : "black"}`}
        strokeWidth={5}
      />
    ),
    right: (
      <ChevronRight
        width={10}
        stroke={`${disable ? "lightgray" : "black"}`}
        strokeWidth={5}
      />
    ),
  };
  return (
    <>
      <div
        className={[
          button["bg__paginate"],
          space["p--8"],
          color["b--white__2"],
          shape["br--circle"],
        ].join(" ")}
      >
        {icons[direction]}
      </div>
    </>
  );
};
