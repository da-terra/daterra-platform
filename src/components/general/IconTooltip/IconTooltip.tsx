import React, { useRef, useState } from "react";
import styled from "styled-components";
import useEvent from "../../../util/hooks/useEvent";
import Icon from "../Icon";
import { Wrapper, Tooltip, IconWrapper } from "./styled";

type IconTooltipProps = {
  children: React.ReactNode;
  className?: string;
  icon: React.FC;
};

const IconTooltip: React.FC<IconTooltipProps> = ({
  children,
  className,
  icon = Icon.Info
}) => {
  const targetRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEvent(targetRef, "mouseenter", () => setVisible(true));
  useEvent(targetRef, "mouseleave", () => setVisible(false));

  const IconComponent = styled(icon)`
    cursor: pointer;
  `;

  return (
    <Wrapper className={className} ref={targetRef}>
      {isVisible && <Tooltip>{children}</Tooltip>}

      <IconWrapper>
        <IconComponent />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconTooltip;
