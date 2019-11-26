import React, { Fragment, useContext, useCallback } from "react";
import { useHistory } from "react-router";
import { FontColor } from "../../../../data/style/variables";
import RoutePath from "../../../../data/RoutePath";
import { HeadingType } from "../../../../components/general/Heading";
import { Context as QuickScanContext } from "../../QuickScan";
import {
  Header,
  InfoIcon,
  Circle,
  Content,
  FormWrapper,
  FormHeading,
  InputGroup,
  Input,
  SubmitButton
} from "./styled";

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

      const company = {
        companyName: formData.get("companyName") as string,
        website: formData.get("website") as string,
        sector: formData.get("sector") as string,
        region: formData.get("region") as string,
        employeeCount: parseInt(formData.get("employeeCount") as string, 10)
      };

      if (company.companyName === "") {
        return;
      }

      quickScanContext.setResult({
        ...quickScanContext.result,
        company
      });

      history.push(RoutePath.QuickScanQuestions);
    },
    [quickScanContext, history]
  );

  return (
    <Fragment>
      <Header />

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
              name="companyName"
              tooltip={requiredTooltip}
            />
            <Input label="Website" name="website" />
            <Input label="Sector" name="sector" />
            <Input label="Regio" name="region" />
            <Input label="Aantal werknemers" name="employeeCount" />
          </InputGroup>

          <SubmitButton type="submit">Start de Quickscan</SubmitButton>
        </FormWrapper>
      </Content>
    </Fragment>
  );
};

export default QuickScanOnboarding;
