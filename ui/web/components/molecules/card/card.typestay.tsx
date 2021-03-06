/** styles **/
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import cardStyles from "@card/card.module.scss";

/**
 * Renders the typestay card
 * @param {Object} card - Information about the card
 */
export const TypeStayCard: React.FC<{
  card?: any;
}> = ({
  card = {
    title: "Type",
    imgUrl:
      "https://a0.muscache.com/im/pictures/175f945a-a4ac-416c-bb10-7e49a927c42f.jpg?im_w=720",
  },
}) => {
  return (
    <div
      className={[
        layout["block"],
        shape["h--full"],
        shape["w--full"],
        space["m-r--8"],
      ].join(" ")}
    >
      <div className={[shape["br--12"], shape["shadow--sm"]].join(" ")}>
        <div style={{ position: "relative", paddingTop: "66.6667%" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <picture>
              <source srcSet={card.imgUrl}></source>
              <img
                decoding="async"
                src={card.imgUrl}
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
            </picture>
          </div>
        </div>
        <div
          className={[cardStyles["h__card"]].join(" ")}
          style={{
            padding: 16,
            backgroundColor: "white",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <p
            className={[
              font["weight--500"],
              font["size--14"],
              color["c--gray__3"],
            ].join(" ")}
          >
            {card.title}
          </p>
        </div>
      </div>
    </div>
  );
};
