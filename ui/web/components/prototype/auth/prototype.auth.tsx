import { useFormik } from "formik";

import { useAuthDispatch, useAuthState } from "@context/auth";

import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import button from "@button/button.module.scss";
import modalStyles from "@modal/modal.module.scss";

import { Input, $Input } from "@input";
import { Button, $Button } from "@button";
import { getAuthContents } from "@button/content/content.auth";

import { validateAuth as validate } from "@helper/auth";

/**
 * Renders the auth template component
 */
export const AuthPrototype: React.FC<{}> = () => {
  const auths = getAuthContents();
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const methods = ["email", "facebook", "google", "apple"];

  const formik = useFormik({
    initialValues: {
      region: "",
      phone: "",
    },
    validate,
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const switchAuth = () => {
    if (authState.title === "Log in") {
      return authDispatch({ type: "auth_signup" });
    }
    return authDispatch({ type: "auth_login" });
  };

  return (
    <div className={[space["p--24"]].join(" ")}>
      <div className={[shape["w--full"]].join(" ")}>
        <form onSubmit={formik.handleSubmit}>
          <div className={[space["m-b--8"]].join(" ")}>
            <div>
              <Input
                variant={$Input.REGION}
                direction="bottom"
                handleChange={formik.handleChange}
                value={formik.values.region}
                errors={formik.errors.region}
              />
              <Input
                variant={$Input.PHONE}
                direction="top"
                handleChange={formik.handleChange}
                value={formik.values.phone}
                errors={formik.errors.phone}
              />
            </div>
          </div>
          <div>
            <p
              className={[
                font["weight--100"],
                color["c--gray__0"],
                font["size--12"],
              ].join(" ")}
            >
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div className={[space["m-t--18"], space["m-b--18"]].join(" ")}>
            <Button variant={$Button.PRIMARY} title="Continue" block />
          </div>
        </form>
        <div
          style={{ zIndex: 1 }}
          className={[
            modalStyles["ba"],
            font["text--center"],
            layout["relative"],
          ].join(" ")}
        >
          <span
            style={{ zIndex: 3 }}
            className={[
              layout["relative"],
              space["p-h--4"],
              color["bg--white"],
              font["weight--100"],
              color["c--gray__0"],
              font["size--12"],
            ].join(" ")}
          >
            or
          </span>
        </div>
        <div>
          {methods.map((method, index) => {
            return (
              <div key={index} className={[space["m-v--14"]].join(" ")}>
                <Button
                  variant={$Button.AUTH}
                  extendsTo={[
                    button["hover__auth"],
                    color["bg--transparent"],
                    layout["block"],
                    shape["w--full"],
                    space["p-h--12"],
                    space["p-v--12"],
                    shape["br--8"],
                  ].join(" ")}
                  auth={method}
                  onClick={auths[method].handleClick}
                  icon={auths[method].icon}
                  name={auths[method].name}
                />
              </div>
            );
          })}
        </div>
        <div className={[space["m-t--4"]].join(" ")}>
          <div className={[layout["inline-block"], space["m-r--6"]].join(" ")}>
            <p
              className={[
                font["size--14"],
                font["weight--300"],
                color["c--gray__1"],
              ].join(" ")}
            >
              {authState.title === "Log in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
          </div>
          <Button
            variant={$Button.UNDERLINE}
            onClick={switchAuth}
            title={authState.title === "Log in" ? "Sign up" : "Log in"}
          />
        </div>
      </div>
    </div>
  );
};
