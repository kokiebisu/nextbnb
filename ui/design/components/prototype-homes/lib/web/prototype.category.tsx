/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

// import { Template } from "../web/template/web/s/homes";
import { Bar, $Bar } from "@nextbnb/organisms-bar";
import { Button, $Button } from "@nextbnb/atoms-button";

/**
 * Renders the category template component
 * @param {string} stayType - Type of stay
 * @param {number} filterCount - Number of filters
 * @param {Object[]} filters - List of filters
 */
export const CategoryPrototype: React.FC<{
  subtitle?: string;
  stayType?: string | string[];
  filterCount?: number;
  filters?: any;
}> = ({
  subtitle = "Subtitle",
  stayType,
  filterCount = 1,
  filters = [
    { name: "Filter" },
    { name: "Filter" },
    { name: "Filter" },
    { name: "Filter" },
    { name: "Filter" },
  ],
}) => {
  const displayTitle = () => {
    if (
      stayType?.includes("tent") ||
      stayType?.includes("barn") ||
      stayType?.includes("tiny_house")
    ) {
      return "Unique stays";
    }
    switch (stayType) {
      case "house":
        return "Entire homes";
      default:
        return "Section title";
    }
  };
  return (
    <div css={{ padding: 24 }}>
      <div>
        <p css={{ fontSize: 14 }}>{subtitle}</p>
      </div>
      <div>
        <h3 css={{ fontSize: 32 }}>{displayTitle()}</h3>
      </div>
      <div css={{ margin: "22px 0" }}>
        <div
          sx={{
            display: ["block", "block", "block", "flex"],
          }}
        >
          {filters.map((filter, index) => {
            return (
              <div key={index} css={{ marginRight: 8 }}>
                <Button variant={$Button.FILTER} name={filter.name} />
              </div>
            );
          })}
        </div>
        <div
          sx={{
            display: ["block", "block", "none"],
          }}
        >
          <Button variant={$Button.FILTER} name={`filters ${filterCount}`} />
        </div>
      </div>
      {/* <div
        css={{
          marginRight: 32,
        }}
      >
        <Template variant="stay" pagination />
      </div>
      <div
        css={{
          marginBottom: 50,
        }}
      >
        <Template variant="also" />
      </div>
      <div
        css={{
          marginBottom: 45,
        }}
      >
        <Template variant="homes" layout="vertical" location={location} />
      </div> */}
      <div css={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
        <Bar variant={$Bar.PAGINATE} animate />
      </div>
    </div>
  );
};