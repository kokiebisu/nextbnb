import React from "react";

/** vectors */
import { ChevronDown, Globe } from "@svg/regular";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

export const Content: React.FC<{ kind?: string; inverse?: boolean }> = ({
  kind = "globe",
  inverse = false,
}) => {
  const kinds = {
    globe: (
      <>
        <div className={[layout["items-center"], space["m-r--8"]].join(" ")}>
          <Globe width={14} fill={inverse ? "white" : "#363636"} />
        </div>
      </>
    ),
    host: (
      <h4
        className={`${[font["size--12"]].join(" ")} ${
          inverse ? color["c--white"] : color["c--gray__4"]
        }`}
      >
        Become a host
      </h4>
    ),
  };
  return kinds[kind];
};
