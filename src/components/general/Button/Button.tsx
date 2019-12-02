import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { ButtonElement } from "./styled";

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self";
  title?: string;
  ref?: any;
  name?: string;
  value?: any;
  type?: "submit" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  // Button can be styled like a paragraph
  fontSize?: any;
  fontWeight?: any;
  fontColor?: any;
  serif?: boolean;
  inverted?: boolean;
};

const externalLinkPattern = /^https?:\/\//i;

const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      children,
      onClick,
      fontSize,
      fontWeight,
      fontColor,
      serif,
      inverted,
      ...props
    },
    ref: any
  ) => {
    let element: any;
    const attributes: any = { onClick, ...props };

    const isExternalLink = props.href && externalLinkPattern.test(props.href);
    const isInternalLink = !isExternalLink && props.href;

    if (isExternalLink) {
      element = "a";

      delete attributes.to;
    } else if (isInternalLink) {
      element = Link;

      delete attributes.href;
      attributes.to = props.href;
    } else {
      element = "button";

      if (props.type == null) {
        attributes.type = "button";
      }
    }

    useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        // Remove focus after click
        event.currentTarget.blur();

        // Propagate click event to onClick prop
        onClick && onClick(event);
      },
      [onClick]
    );

    return (
      <ButtonElement {...attributes} as={element} ref={ref}>
        {children}
      </ButtonElement>
    );
  }
);

export default Button;
