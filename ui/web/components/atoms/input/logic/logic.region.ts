import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";

export const renderShape = (direction: string) => {
  switch (direction) {
    case "top":
      return [
        color["b-b--white__3"],
        color["b-l--white__3"],
        color["b-r--white__3"],
        shape["bbr--10"],
      ].join(" ");
    case "bottom":
      return [
        color["b-t--white__3"],
        color["b-l--white__3"],
        color["b-r--white__3"],
        shape["btr--10"],
      ].join(" ");
    default:
      return [color["b--white__3"], shape["br--10"]].join(" ");
  }
};
