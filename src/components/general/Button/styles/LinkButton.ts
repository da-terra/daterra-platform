import styled from "styled-components";
import { FontSize } from "../../../../data/style/variables";
import { paragraphCss } from "../../Paragraph";
import Button from "../Button";

export const LinkButton = styled(Button)`
  ${paragraphCss}
`;

LinkButton.defaultProps = {
  fontSize: FontSize.Normal
};

export default LinkButton;
