import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import card from "@card/card.module.scss";

export const types = {
  requirements: {
    imgUrl:
      "https://a0.muscache.com/im/pictures/969a398f-5131-4c7c-af87-62fbf39f9854.jpg?im_q=highq&im_w=480",
    title: "Choose your requirements",
    description:
      "Decide how many people can stay and for how long. Set house rules that guests must follow when staying at your place.",
  },
  decide: {
    imgUrl:
      "https://a0.muscache.com/im/pictures/d04921d2-6064-440e-a18a-488406a2d3d4.jpg?im_q=highq&im_w=480",
    title: "Decide when to host",
    description:
      "Block off dates on your calendar whenever you like—there’s no minimum time that your place needs to be available.",
  },
  prices: {
    imgUrl:
      "https://a0.muscache.com/im/pictures/0d2e1b83-db57-4e75-952c-9b53eec0c46b.jpg?im_q=highq&im_w=480",
    title: "Set your own prices",
    description:
      "What you charge is up to you. Our tools and insights can help you set nightly prices that are competitive for your area.",
  },
  help: {
    imgUrl:
      "https://a0.muscache.com/im/pictures/66f93645-d028-4983-b739-235cd667c60c.jpg?im_q=highq&im_w=480",
    title: "Help guests feel welcome",
    description:
      "Follow our amenity and performance guidelines to create comfortable stays and earn great reviews.",
  },
};

export const HostingCard: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <div className={[card["hosting"]].join(" ")}>
      <div>
        {types[type]?.imgUrl ? (
          <div
            style={{
              height: 160,
            }}
          >
            <img
              src={types[type]?.imgUrl}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
        ) : (
          <div
            style={{
              width: 260,
              height: 160,
              backgroundColor: "lightgray",
              borderRadius: 8,
            }}
          />
        )}
      </div>
      <div className={[space["m-v--16"]].join(" ")}>
        <h2 className={[font["size--22"]].join(" ")}>
          {types[type]?.title || "Title here"}
        </h2>
      </div>
      <div>
        <h4
          style={{ lineHeight: 1.6 }}
          className={[font["size--16"]].join(" ")}
        >
          {types[type]?.description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </h4>
      </div>
      <div className={[space["m-v--18"]].join(" ")}>
        <u className={[font["size--14"]].join(" ")}>Learn more</u>
      </div>
    </div>
  );
};
