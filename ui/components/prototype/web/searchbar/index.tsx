/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef, useState } from "react";
import { Bar, $Bar } from "../../../organisms/bar/web";
import { Modal } from "../../../organisms/modal/web";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export interface PrototypeProps {
  expanded?: boolean;
  setExpanded?: any;
  type?: any;
  setCategory?: any;
  transparent?: boolean;
  toggleState?: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  type,
  setCategory,
  transparent = false,
  expanded,
  setExpanded,
  toggleState = {
    location: false,
    checkin: false,
    checkout: false,
    guests: false,
  },
}) => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef();

  useOnClickOutside(containerRef, () => {
    if (selected) {
      setSelected(!selected);
    }
    if (expanded) {
      setExpanded(!expanded);
    }
  });

  const contents = {
    location: {
      styles: {
        left: 0,
        maxWidth: 400,
      },
    },
    checkin: {
      styles: {
        left: 0,
        maxWidth: 780,
      },
    },
    checkout: {
      styles: {
        left: 0,
        maxWidth: 780,
      },
    },
    guests: {
      styles: {
        right: 0,
        maxWidth: 325,
        display: "flex",
        justifyContent: "flex-end",
      },
    },
  };

  return (
    <div css={{ position: "relative" }}>
      <Bar
        variant={$Bar.SEARCH}
        selected={selected}
        setSelected={setSelected}
        type={type}
        setCategory={setCategory}
        extendsTo={{ padding: "0 12px" }}
        transparent={transparent}
      />
      {Object.keys(contents).map((content, index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 60,
              zIndex: 80,
              width: "100%",
              ...contents[content].styles,
            }}
          >
            <div css={{ width: "100%" }} ref={containerRef}>
              <Modal
                variant={content}
                dispatch={`toggle_${content}`}
                extendsTo={{ width: "100%" }}
                criteria={toggleState[content]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};