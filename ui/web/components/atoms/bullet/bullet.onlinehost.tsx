/** vectors */
import { Global, Home, Lightening } from "@svg/original";

/** styles **/
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

export const types = {
  home: {
    icon: <Home />,
    title: "Host from home",
    description: "Share your expertise and a window to your world",
  },
  global: {
    icon: <Global />,
    title: "Meet global guests",
    description: "Make the world feel a little smaller and a lot friendlier.",
  },
  business: {
    icon: <Lightening />,
    title: "Build a business",
    description:
      "Earn money doing something you love with support from Airbnb.",
  },
  resources: {
    icon: (
      <img
        style={{ width: 40 }}
        src="https://a0.muscache.com/pictures/6fccb4f8-e134-40a9-9863-b0d42923db62.jpg"
      />
    ),
    title: "Resources",
    description:
      "Guidelines, tips, and tricks for hosting successful online experiences.",
  },
  events: {
    icon: (
      <img
        style={{ width: 40 }}
        src="https://a0.muscache.com/pictures/11f05488-4ea5-4b54-a1a2-755c006e803f.jpg"
      />
    ),
    title: "Online events",
    description: "Learn to master the art of hosting, online and otherwise.",
  },
  community: {
    icon: (
      <img
        style={{ width: 40 }}
        src="https://a0.muscache.com/pictures/639bef93-4cc4-4676-9d83-705093a3d2e6.jpg"
      />
    ),
    title: "Community support",
    description:
      "Connect with other hosts through Facebook groups and meetups.",
  },
};

export const OnlineHostBullet: React.FC<{
  type?: string;
}> = ({ type = "home" }) => {
  return (
    <div>
      <div>{types[type].icon}</div>
      <div className={[space["m-v--16"]].join(" ")}>
        <h3>{types[type].title}</h3>
      </div>
      <div className={[font["size--14"]].join(" ")}>
        <p>{types[type].description}</p>
      </div>
    </div>
  );
};
