import React from "react";
import { motion } from "framer-motion";

/** Styles */
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import layout from "../../../styles/layout.module.scss";

/** Components */
import { Button } from "../../../components/atoms/button/button.component";
import { getOptionContents } from "../../../components/atoms/button/content/content.option";
import { option } from "../../../components/atoms/button/button.stories";

/** Props */
import { MenuModalProps } from "./props";

/** Hooks */
import useOnClickOutside from "../../../hooks/useOnClickOutside";

/** Contexts */
import { useToggleDispatch } from "../../../context/toggle";

const Options: React.FC<{
  params?: {
    kind: string;
    bold: boolean;
  }[];
}> = ({ params }) => {
  const options = getOptionContents();
  return (
    <>
      {params.map(({ kind, bold }, index) => (
        <div key={index}>
          <Button
            {...option.args}
            bold={bold}
            onPress={options[kind].handleClick}
            name={options[kind].name}
          />
        </div>
      ))}
    </>
  );
};

/**
 * Renders the menu modal
 * @param refProp
 */
export const MenuModal: React.FC<MenuModalProps> = ({
  refProp,
  authenticated = false,
}) => {
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(refProp, () => toggleDispatch({ type: "toggle_menu" }));

  return (
    <motion.div
      ref={refProp}
      exit={{ opacity: 0 }}
      className={[
        shape["br--15"],
        shape["shadow--lg"],
        layout["flex"],
        layout["items-center"],
        color["bg--white"],
      ].join(" ")}
      style={{ width: 230, height: authenticated ? 420 : 230 }}
    >
      <div className={[shape["w--inherit"]].join(" ")}>
        {authenticated ? (
          <Options
            params={[
              // { kind: "messages", bold: true },
              // { kind: "notifications", bold: true },
              { kind: "trips", bold: true },
              // { kind: "saved", bold: true },
            ]}
          />
        ) : (
          <Options
            params={[
              { kind: "signup", bold: true },
              { kind: "login", bold: false },
            ]}
          />
        )}
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "lightgray",
            margin: "6px 0",
          }}
        ></div>
        {authenticated ? (
          <Options
            params={[
              { kind: "home", bold: false },
              // { kind: "experience", bold: false },
              // { kind: "refer", bold: false },
              { kind: "account", bold: false },
            ]}
          />
        ) : (
          <Options
            params={[
              { kind: "home", bold: false },
              // { kind: "experience", bold: false },
              // { kind: "help", bold: false },
            ]}
          />
        )}
        {authenticated && (
          <>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "lightgray",
                margin: "6px 0",
              }}
            ></div>
            <Options
              params={[
                // { kind: "help", bold: false },
                { kind: "logout", bold: false },
              ]}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};
