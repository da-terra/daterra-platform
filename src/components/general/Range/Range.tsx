import React, { useState, useRef } from "react";
import useEvent from "../../../util/hooks/useEvent";
import { Wrapper, Value, Slider, Thumb, LabelWrapper, Label } from "./styled";
import { FontWeight, FontSize, FontColor } from "../../../data/style/variables";

type RangeProps = {
  name: string;
  labels: [React.ReactNode, React.ReactNode];
};

const scale = 100;

const labelProps = {
  fontWeight: FontWeight.Bold,
  fontSize: FontSize.Small,
  fontColor: FontColor.Secondary
};

const Range: React.FC<RangeProps> = function({
  name,
  labels: [leftLabel, rightLabel]
}) {
  const [value, setValue] = useState<number>(0);

  const thumbRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const eventRaf = useRef(0);

  // Update the value for the range slider
  const mouseEventRaf = (event: MouseEvent) => () => {
    const sliderBounds = sliderRef.current!.getBoundingClientRect();

    const maxRawValue = sliderBounds.width;
    const minRawValue = 0;
    const rawValue = event.screenX - sliderBounds.left;

    const value = Math.max(minRawValue, Math.min(rawValue, maxRawValue));

    setValue((1 / maxRawValue) * value);
  };

  const mouseEventHandler = (event: MouseEvent) => {
    // Update value to initial position
    cancelAnimationFrame(eventRaf.current);
    eventRaf.current = requestAnimationFrame(mouseEventRaf(event));

    // Ignore all but left mouse button
    if (event.button !== 0) {
      return;
    }

    // Disable user select when dragging along the slider
    document.body.style.userSelect = "none";

    // Use animation frame to make sure that the UI stays smooth
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(eventRaf.current);
      eventRaf.current = requestAnimationFrame(mouseEventRaf(event));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  // Event handler for thumb drag behavior
  useEvent<MouseEvent>(thumbRef, "mousedown", mouseEventHandler);

  // Event handler for slider click behavior
  useEvent<MouseEvent>(sliderRef, "mousedown", mouseEventHandler);

  return (
    <Wrapper>
      <Value>{Math.round(value * scale)}%</Value>

      <Slider ref={sliderRef}>
        <Thumb style={{ left: `${value * scale}%` }} ref={thumbRef} />
      </Slider>

      <LabelWrapper>
        <Label {...labelProps}>{leftLabel}</Label>
        <Label {...labelProps}>{rightLabel}</Label>
      </LabelWrapper>

      <input type="hidden" name={name} value={value} />
    </Wrapper>
  );
};

export default Range;
