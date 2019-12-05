import React, { Fragment, useContext, useCallback } from "react";
import { useHistory } from "react-router";
import { FontColor } from "../../../../data/style/variables";
import RoutePath from "../../../../data/RoutePath";
import { WrapperWidth } from "../../../../components/general/Wrapper";
import { HeadingType } from "../../../../components/general/Heading";
import { Context as QuickScanContext } from "../../QuickScan";
import {
  InfoIcon,
  Circle,
  Header,
  Form,
  Wrapper,
  FormHeading,
  FormParagraph,
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
      <Circle x={25} y={-20} />

      <Header />
      <Wrapper width={WrapperWidth.Smaller}>
        <Form onSubmit={submitHandler}>
          <FormHeading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Bedrijfsgegevens
          </FormHeading>
          <FormParagraph>
            Wij zijn erg geïnteresseerd met welk bedrijf wij het genoegen
            hebben. Kan u ons wat meer vertellen over het bedrijf? Zodoende
            kunnen wij een persoonlijke analyse uitvoeren.
          </FormParagraph>
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
          <SubmitButton type="submit">Start de Quickscan</SubmitButton>{" "}
        </Form>
      </Wrapper>
    </Fragment>
  );
};

export default QuickScanOnboarding;
