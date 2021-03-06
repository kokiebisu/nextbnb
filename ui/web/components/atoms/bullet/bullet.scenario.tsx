/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

export const ScenarioBullet: React.FC<{ type?: string }> = ({
  type = "available",
}) => {
  const types = {
    available: {
      imgUrl:
        "https://a0.muscache.com/airbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png",
      title: "You're available to host starting Dec. 21",
      description:
        "Lou is planning her trip and thinks your listing is perfect.",
    },
    requirements: {
      imgUrl:
        "https://a0.muscache.com/airbnb/static/list_your_space/scenarios-arrival-534375c0dfd3291d3073949a00555d3c.png",
      title: "Guests who meet Airbnb requirements can instantly book.",
      description:
        "In addition to meeting guest requirements, Lou agrees to your House Rules",
    },
    confirmation: {
      imgUrl:
        "https://a0.muscache.com/airbnb/static/list_your_space/IB-only-message-illo-66933bcd7dfc0f2172c6a819cf92619e.png",
      title: "Guests send a message with their booking confirmation.",
      description:
        "Lou says she'll be in town for work and she'd love to stay with you.",
    },
    welcome: {
      imgUrl:
        "https://a0.muscache.com/airbnb/static/list_your_space/IB-only-keys-illo-11711142d4585a536643dddb8234bf3f.png",
      title: "Welcome guests to your space",
      description:
        "Before Lou arrives, coordinate details like check-in time and key exchange.",
    },
    paid: {
      imgUrl:
        "https://a0.muscache.com/airbnb/static/list_your_space/Illustration_WomanLaptop-6645d479058f6ae5d5aabb66a6fa5e2e.png",
      title: "Get paid",
      description:
        "The day after Lou checks in, you’ll receive your money, minus a 3% service fee. You can add or change your preferred payout method in your Account Settings.",
    },
  };
  return (
    <div>
      <div className={[space["m-b--8"]].join(" ")}>
        <img
          style={{ width: 150 }}
          src={types[type].imgUrl}
          alt="scenario img"
        />
      </div>
      <div className={[space["m-b--8"]].join(" ")}>
        <h3 className={[font["size--14"]].join(" ")}>{types[type].title}</h3>
      </div>
      <div className={[space["m-b--8"]].join(" ")}>
        <p className={[font["size--15"]].join(" ")}>
          {types[type].description}
        </p>
      </div>
    </div>
  );
};
