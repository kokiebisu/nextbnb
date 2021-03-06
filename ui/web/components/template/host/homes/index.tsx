import { PriorityTemplate } from "./template.priority";
import { HelpTemplate } from "./template.help";
import { ReadyTemplate } from "./template.ready";
import { CommunityTemplate } from "./template.community";
import { AllTemplate } from "./template.all";
import { BannerTemplate } from "./template.banner";
import { HostingTemplate } from "./template.hosting";

export const $Template = {
  ALL: "all",
  HELP: "help",
  BANNER: "banner",
  COMMUNITY: "community",
  HOSTING: "hosting",
  PRIORITY: "priority",
  READY: "ready",
};

export interface TemplateProps {
  extendsTo?: string;
  variant?: string;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Template: React.FC<TemplateProps> = ({
  extendsTo = "",
  variant = "help",
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    help: <HelpTemplate {...props} />,
    priority: <PriorityTemplate {...props} />,
    community: <CommunityTemplate {...props} />,
    ready: <ReadyTemplate {...props} />,
    all: <AllTemplate {...props} />,
    banner: <BannerTemplate {...props} />,
    hosting: <HostingTemplate {...props} />,
  };

  return (
    <div data-testid={`${variant}-landing--template`}>{variants[variant]}</div>
  );
};
