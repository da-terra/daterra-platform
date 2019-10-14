import React, { useRef, useState } from "react";
import useEvent from "../../../util/hooks/useEvent";
import Icon from "../Icon";
import { Wrapper, Tooltip, Arrow } from "./styled";

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
  const IconComponent = icon;

  const targetRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  // Handlers
  useEvent(targetRef, "mouseenter", () => setVisible(true));

  useEvent(targetRef, "mouseleave", () => setVisible(false));

  return (
    <Wrapper className={className} ref={targetRef}>
      <IconComponent />

      {isVisible && (
        <Tooltip>
          <Arrow />

          {children}
        </Tooltip>
      )}
    </Wrapper>
  );
};

export default IconTooltip;
