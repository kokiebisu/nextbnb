/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { filter } from "../styles/button.filter";

const { web, theme } = filter;

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton: React.FC<{ label?: string; inverse?: boolean }> = ({
  label = "Button",
  inverse = false,
}) => {
  return (
    <div
      css={{
        ...web.wrapper,
      }}
      sx={{
        ...(inverse ? theme.inverse.wrapper : theme.plain.wrapper),
      }}
    >
      <p css={web.label.text}>{label}</p>
    </div>
  );
};