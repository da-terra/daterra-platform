import React, { useRef, useState } from "react";
import styled from "styled-components";
import useEvent from "../../../util/hooks/useEvent";
import Icon from "../Icon";
import { Wrapper, Tooltip, IconWrapper } from "./styled";

export type IconTooltipProps = {
  children: React.ReactNode;
  className?: string;
  error?: boolean;
  icon: React.FC;
};

const IconTooltip: React.FC<IconTooltipProps> = ({
  children,
  className,
  error,
  icon = Icon.Info
}) => {
  const targetRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEvent(targetRef, "mouseenter", () => setVisible(true));
  useEvent(targetRef, "mouseleave", () => setVisible(false));

  const Component = icon;
  const IconComponent = styled(({ error, ...props }) => (
    <Component {...props} />
  ))`
    cursor: pointer;
    fill: ${props =>
      props.error ? props.theme.copy.error : props.theme.copy.secondary};
  `;

  return (
    <Wrapper className={className} ref={targetRef}>
      {isVisible && <Tooltip>{children}</Tooltip>}

      <IconWrapper>
        <IconComponent error={error} />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconTooltip;
