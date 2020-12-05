import React from "react";
import Link from "next/link";

/** Styles */
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import styles from "../../../styles/index.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** Components */
import { menu as menuModal } from "../../organisms/modal/modal.stories";
import { Modal } from "../modal/modal.component";
import { Button } from "../../../components/atoms/button/button.component";

/** Contexts */
import { useToggleDispatch, useToggleState } from "../../../context/toggle";

/** Vectors */
import { NameLogo, NoNameLogo } from "../../../public/svg/logo";
import { ChevronLeft } from "../../../public/svg/regular";

/** Props */
import { WhiteHeaderProps } from "./props";

/** Stories */
import {
  host,
  menu,
  globe,
} from "../../../components/atoms/button/button.stories";

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeader: React.FC<WhiteHeaderProps> = ({
  spread = false,
  data,
}) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  return (
    <header
      className={`${[
        space["p-v--16"],
        color["bg--white"],
        shape["shadow--sm"],
      ].join(" ")}`}
    >
      <div
        className={
          spread
            ? [layout["container--spread"]].join(" ")
            : [layout["container"]].join(" ")
        }
      >
        <div
          className={[
            shape["from__md--flex"],
            layout["relative"],
            layout["justify-between"],
            layout["items-center"],
          ].join(" ")}
        >
          <div>
            <Link href="/">
              <a style={{ display: "block" }}>
                <div className={styles["searchbar__logo--md"]}>
                  <NoNameLogo fill="#F5385D" width={30} height={32} />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a style={{ display: "block" }}>
                <div className={styles["searchbar__logo--lg"]}>
                  <NameLogo fill="#F5385D" width={102} height={32} />
                </div>
              </a>
            </Link>
          </div>
          {/* <div>
            <Button type="searchbar" mini />
          </div> */}
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div
              className={[styles["searchbar__host"], space["m-h--4"]].join(" ")}
            >
              <Button {...host.args} animate />
            </div>
            {/* <div className={[space["m-h--4"]].join(" ")}>
              <Button
                {...globe.args}
                onPress={() => toggleDispatch({ type: "toggle_language" })}
              />
            </div> */}
            <div className={[space["m-l--4"]].join(" ")}>
              <Button
                {...menu.args}
                authenticated={data}
                inverse
                onPress={() => toggleDispatch({ type: "toggle_menu" })}
              />
            </div>
          </div>
          <Modal
            authenticated={data}
            criteria={toggleState.menu}
            {...menuModal.args}
            extendsTo={[
              layout["absolute"],
              layout["t--55"],
              layout["r--0"],
              color["bg--transparent"],
            ].join(" ")}
          />
        </div>
        <div className={[shape["only__sm"]].join(" ")}>
          <div
            className={[layout["all-center"], styles["container"]].join(" ")}
          >
            <div style={{ width: 30 }}>
              <ChevronLeft width={12} />
            </div>
            {/* <div style={{ width: "100%", flexGrow: 1 }}>
              <Button type="searchbar" onPress={() => console.log("pressed")} />
            </div> */}
            <div style={{ width: 30, visibility: "hidden" }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
