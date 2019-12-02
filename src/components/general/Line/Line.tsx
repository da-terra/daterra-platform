import React from "react";
import { HorizontalLine, VerticalLine } from "./styled";

type LineProps = {
  vertical?: boolean;
};

const Line: React.FC<LineProps> = ({ vertical }) =>
  vertical ? <VerticalLine /> : <HorizontalLine />;

export default Line;
