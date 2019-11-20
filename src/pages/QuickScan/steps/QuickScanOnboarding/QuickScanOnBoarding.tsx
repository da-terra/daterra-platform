import React, { Fragment, useContext, useCallback } from "react";
import { useHistory } from "react-router";
import mergeFormData from "../../../../util/forms/mergeFormData";
import { HeadingType } from "../../../../components/general/Heading";
import { QuickScanContext } from "../../QuickScan";
import {
  InfoIcon,
  Circle,
  Content,
  FormWrapper,
  FormHeading,
  InputGroup,
  Input,
  SubmitButton
} from "./styled";
import { FontColor } from "../../../../data/style/variables";
import RoutePath from "../../../../data/RoutePath";

const requiredTooltip = {
  icon: InfoIcon,
  message: "Dit veld is verplicht"
};

const QuickScanOnboarding = () => {
  const quickScanContext = useContext(QuickScanContext);
  const history = useHistory();

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);

      quickScanContext.setFormData(
        mergeFormData(quickScanContext.formData!, formData)
      );

      history.push(RoutePath.QuickScanQuestions);
    },
    [quickScanContext, history]
  );

  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Content>
        <FormWrapper onSubmit={submitHandler}>
          <FormHeading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Bedrijfsgegevens
          </FormHeading>

          <InputGroup>
            <Input
              label="Bedrijfsnaam"
              name="company"
              tooltip={requiredTooltip}
            />
            <Input label="Website" name="website" />
            <Input label="Sector" name="sector" />
          </InputGroup>

          <SubmitButton type="submit">Start de Quickscan</SubmitButton>
        </FormWrapper>
      </Content>
    </Fragment>
  );
};

export default QuickScanOnboarding;
