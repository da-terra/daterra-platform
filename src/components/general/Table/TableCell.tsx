import React from "react";
import styled from "styled-components";
import Paragraph, { ParagraphProps } from "../Paragraph";
import { FontWeight } from "../../../data/style/variables";

const Cell = styled(Paragraph)<{ heading?: boolean }>`
  text-align: left;
  padding: ${props =>
    props.heading ? "1.5rem 4rem 1.5rem 2rem" : "1rem 4rem 1rem 2rem"};
`;

type TableCellProps = ParagraphProps & {
  heading?: boolean;
};

const TableCell: React.FC<TableCellProps> = ({ heading, ...props }) => (
  <Cell
    {...props}
    heading={heading}
    fontWeight={heading ? FontWeight.Bold : props.fontWeight}
    as={heading ? "th" : "td"}
  />
);

export default TableCell;
