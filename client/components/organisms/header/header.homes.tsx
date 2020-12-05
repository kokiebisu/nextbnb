import React from "react";
import Router from "next/router";

/** Props */
import { HomesHeaderProps } from "./props";

/** Styles */
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";
import header from "./header.module.scss";

/** Vectors */
import { NoNameLogo } from "../../../public/svg/logo";

/** Components */
import { Button } from "../../../components/atoms/button/button.component";

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const HomesHeader: React.FC<HomesHeaderProps> = ({ spread = false }) => {
  return (
    <header style={{ height: 80 }} className={[space["p-h--0"]].join(" ")}>
      <div
        style={{ padding: 20 }}
        className={` ${[shape["h--full"]].join(" ")}`}
      >
        <div>
          <Button
            extendsTo={[
              layout["inline-block"],
              header["hover__logo"],
              space["p--14"],
              shape["br--circle"],
            ].join(" ")}
            onPress={() => Router.push("/")}
          >
            <NoNameLogo fill="black" width={30} height={32} />
          </Button>
        </div>
      </div>
    </header>
  );
};
