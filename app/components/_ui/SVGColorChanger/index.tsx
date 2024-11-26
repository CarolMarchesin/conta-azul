import React from "react";

interface GenericSVGColorChangerProps {
  svg: React.ReactNode;
  colors: string;
}

export const GenericSVGColorChanger: React.FC<GenericSVGColorChangerProps> = ({
  svg,
  colors,
}) => {
  return (
    <>
      <div className={`${colors}`}>
        {React.cloneElement(svg as React.ReactElement, {
          className: `${
            (svg as React.ReactElement).props.className || ""
          }`,
          "aria-hidden": "true",
        })}
      </div>
    </>
  );
};