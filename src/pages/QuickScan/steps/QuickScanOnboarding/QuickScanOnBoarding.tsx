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
import { MultipleChoice } from "../../general/MultipleChoiceQuestion/styled";

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

      <MultipleChoice
        name="test"
        options={[
          {
            label: "Option1",
            info: "Option1 info",
            value: "Option1"
          },

          {
            label: "Option2",
            info: "Option2 info",
            value: "Option2"
          },

          {
            label: "Option3",
            info: "Option3 info",
            value: "Option3"
          },

          {
            label: "Option4",
            info: "Option4 info",
            value: "Option4"
          },

          {
            label: "Option5",
            info: "Option5 info",
            value: "Option5"
          }
        ]}
      />

      <Wrapper width={WrapperWidth.Smaller}>
        <Form onSubmit={submitHandler}>
          <FormHeading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Bedrijfsgegevens
          </FormHeading>
          <FormParagraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            consequuntur placeat, architecto reprehenderit ea amet quae
            provident ipsa consequatur illum. Deserunt nihil assumenda quae
            labore laudantium facere, amet optio qui.
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
