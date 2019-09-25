import React from "react";
import styled from "styled-components";

/**
 * Headings
 */
export type HeadingProps = {
  level: number;
  children: JSX.Element;
};

export const PrimaryHeading = ({
  level = 1,
  children,
  ...props
}: HeadingProps) => {
  const Component = React.createFactory(`h${level}`);
  const Heading = styled(Component)``;

  return <Heading {...props}>{children}</Heading>;
};

export const SecondaryHeading = ({
  level = 2,
  children,
  ...props
}: HeadingProps) => {
  const Component = React.createFactory(`h${level}`);
  const Heading = styled(Component)``;

  return <Heading {...props}>{children}</Heading>;
};
