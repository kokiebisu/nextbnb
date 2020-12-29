import React from "react";

/** components */
import { Banner } from "../../components/organisms/banner/banner.component";
import { Header } from "../../components/organisms/header/header.component";
import { Section } from "../../components/organisms/section/section.component";
import { Footer } from "../../components/organisms/footer/footer.component";

/** styles **/
import layout from "../../styles/layout.module.scss";
import space from "../../styles/space.module.scss";

/** hooks */
import { useTabTitle } from "hooks/useTabTitle";

const OnlineHost = () => {
  useTabTitle("Airbnb Experiences: Host an Online Experience");

  return (
    <div>
      <div>
        <Header variant="onlinehost" />
      </div>
      <div>
        <div className={[layout["container"]].join(" ")}>
          <Banner variant="onlinehost" />
        </div>
      </div>
      <div className={[layout["container"]].join(" ")}>
        <Section variant="works" />
      </div>
      <div
        className={[layout["container--shrink"], space["p-v--64"]].join(" ")}
      >
        <Section variant="sharing" />
      </div>
      <div className={[layout["container"], space["p-v--64"]].join(" ")}>
        <Section variant="back" />
      </div>
      <div className={[layout["container"], space["p-v--100"]].join(" ")}>
        <Section variant="faq" />
      </div>
      <div>
        <Section variant="more" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;