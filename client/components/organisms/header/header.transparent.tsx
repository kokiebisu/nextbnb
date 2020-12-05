import React from "react";
import Router from "next/router";

/** Styles */
import space from "../../../styles/space.module.scss";
import styles from "../../../styles/index.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";
import header from "./header.module.scss";

/** Components */
import { menu as menuModal } from "../../organisms/modal/modal.stories";
import { Modal } from "../modal/modal.component";
import { Button } from "../../../components/atoms/button/button.component";

/** Vectors */
import { NameLogo, NoNameLogo } from "../../../public/svg/logo";
import { MagnifyGlass } from "../../../public/svg/original";

/** Props */
import { TransparentHeaderProps } from "./props";

/** Contexts */
import { useToggleDispatch, useToggleState } from "../../../context/toggle";

/** Stories */
import {
  host,
  menu,
  globe,
} from "../../../components/atoms/button/button.stories";

/**
 * Renders the transparent header
 */
export const TransparentHeader: React.FC<TransparentHeaderProps> = ({
  data,
}) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();

  return (
    <header className={[space["p-h--0"], space["p-v--16"]].join(" ")}>
      <div
        className={[
          header["display__transparent--md"],
          layout["items-center"],
          layout["justify-between"],
          layout["relative"],
        ].join(" ")}
      >
        <div>
          <div className={styles["searchbar__logo--md"]}>
            <NoNameLogo fill="white" width={30} height={32} />
          </div>
          <div className={styles["searchbar__logo--lg"]}>
            <NameLogo fill="white" width={102} height={32} />
          </div>
        </div>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div
            className={[styles["searchbar__host"], space["m-h--4"]].join(" ")}
          >
            <Button {...host.args} inverse animate />
          </div>
          {/* <div className={[space["m-h--4"]].join(" ")}>
            <Button
              {...globe.args}
              inverse
              onPress={() => toggleDispatch({ type: "toggle_language" })}
            />
          </div> */}
          <div className={[space["m-l--4"]].join(" ")}>
            <Button
              {...menu.args}
              inverse
              authenticated={data}
              onPress={() => toggleDispatch({ type: "toggle_menu" })}
            />
          </div>
        </div>
        <Modal
          authenticated={data}
          criteria={toggleState.menu}
          type="menu"
          extendsTo={[
            layout["absolute"],
            layout["r--0"],
            layout["t--55"],
            color["bg--transparent"],
          ].join(" ")}
        />
      </div>
      <div
        className={[
          header["display__transparent--sm"],
          layout["items-center"],
          space["p-v--10"],
          space["p-h--25"],
          shape["br--30"],
          shape["shadow"],
          color["bg--white"],
        ].join(" ")}
      >
        <div className={[space["m-r--15"]].join(" ")}>
          <MagnifyGlass stroke={"black"} strokeWidth={4} width={17} />
        </div>
        <div>
          <input
            className={[
              color["b--0"],
              font["size--16"],
              font["weight--300"],
              shape["outline--none"],
            ].join(" ")}
            placeholder="Where are you going"
          />
        </div>
      </div>
    </header>
  );
};
