import { motion } from "framer-motion";

import { AuthButton } from "@button/button.auth";
import { MenuButton } from "@button/button.menu";
import { PrivacyButton } from "@button/button.privacy";
import { BorderButton } from "@button/button.border";
import { BannerButton } from "@button/button.banner";
import { PrimaryButton } from "@button/button.primary";
import { SearchbarButton } from "@button/button.searchbar";
import { PaginateButton } from "@button/button.paginate";
import { ExpandButton } from "@button/button.expand";
import { OptionButton } from "@button/button.option";
import { UnderlineButton } from "@button/button.underline";
import { FilterButton } from "@button/button.filter";
import { ModalButton } from "@button/button.modal";
import { BackButton } from "@button/button.back";
import { ClosedButton } from "@button/button.closed";
import { TransparentButton } from "@button/button.transparent";
import { GlobeButton } from "@button/button.globe";
import { LinkButton } from "@button/button.link";
import { SearchButton } from "@button/button.search";
import { LocationButton } from "@button/button.location";
import { LogoButton } from "@button/button.logo";
import { NearbyButton } from "@button/button.nearby";
import { CalendarButton } from "@button/button.calendar";
import { VideoButton } from "@button/button.video";
import { DestinationButton } from "@button/button.destination";
import { CurrencyButton } from "@button/button.currency";

import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import animation from "@styles/animation.module.scss";

export const $Button = {
  AUTH: "auth",
  MENU: "menu",
  PRIVACY: "privacy",
  BORDER: "border",
  BAR: "bar",
  BANNER: "banner",
  PRIMARY: "primary",
  PAGINATE: "paginate",
  EXPAND: "expand",
  OPTION: "option",
  UNDERLINE: "underline",
  FILTER: "filter",
  MODAL: "modal",
  BACK: "back",
  TRANSPARENT: "transparent",
  GLOBE: "globe",
  LINK: "link",
  CLOSED: "closed",
  SEARCH: "search",
  LOCATION: "location",
  NEARBY: "nearby",
  CALENDAR: "calendar",
  SEARCHBAR: "searchbar",
  LOGO: "logo",
  VIDEO: "video",
  DESTINATION: "destination",
  CURRENCY: "currency",
};

export interface ButtonProps {
  extendsTo?: string;
  variant?: string;
  onClick?: () => void;
  block?: boolean;
  animate?: boolean;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Button: React.FC<ButtonProps> = ({
  extendsTo = "",
  variant,
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const { disable } = props;
  const variants: { [key: string]: JSX.Element } = {
    auth: <AuthButton {...props} />,
    menu: <MenuButton {...props} />,
    privacy: <PrivacyButton {...props} />,
    border: <BorderButton {...props} />,
    banner: <BannerButton {...props} />,
    primary: <PrimaryButton {...props} />,
    // searchbar: <SearchbarButton {...props} />,
    paginate: <PaginateButton {...props} />,
    expand: <ExpandButton {...props} />,
    option: <OptionButton {...props} />,
    underline: <UnderlineButton {...props} />,
    filter: <FilterButton {...props} />,
    modal: <ModalButton {...props} />,
    back: <BackButton {...props} />,
    transparent: <TransparentButton {...props} />,
    globe: <GlobeButton {...props} />,
    link: <LinkButton {...props} />,
    closed: <ClosedButton {...props} />,
    search: <SearchButton {...props} />,
    location: <LocationButton {...props} />,
    nearby: <NearbyButton {...props} />,
    calendar: <CalendarButton {...props} />,
    searchbar: <SearchbarButton {...props} />,
    logo: <LogoButton {...props} />,
    video: <VideoButton {...props} />,
    destination: <DestinationButton {...props} />,
    currency: <CurrencyButton {...props} />,
  };

  return (
    <motion.button
      transition={{ duration: 0.1, ease: "easeInOut" }}
      whileTap={{ scale: disable || !animate ? 1 : 0.995 }}
      whileHover={{ scale: disable || !animate ? 1 : 1.005 }}
      data-testid={`${variant}-button--atom`}
      className={`${extendsTo} ${
        block
          ? [layout["block"], shape["w--full"]].join(" ")
          : layout["inline-block"]
      } ${[animation["transition"]].join(" ")}`}
      onClick={!disable ? onClick : undefined}
      disabled={disable}
      style={{ cursor: disable ? "default" : "pointer" }}
    >
      {variant ? variants[variant] : children}
    </motion.button>
  );
};
