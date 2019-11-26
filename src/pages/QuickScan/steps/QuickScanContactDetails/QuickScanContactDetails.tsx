import React, { Fragment, useContext, useCallback } from "react";
import { useHistory, Redirect } from "react-router";
import { FontColor } from "../../../../data/style/variables";
import RoutePath from "../../../../data/RoutePath";
import { HeadingType } from "../../../../components/general/Heading";
import { Context as QuickScanContext } from "../../QuickScan";
import {
  InfoIcon,
  Header,
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

const QuickScanContactDetails = () => {
  const quickScanContext = useContext(QuickScanContext);
  const history = useHistory();

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);

      const person = {
        name: formData.get("name") as string,
        role: formData.get("role") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string
      };

      // Validate input
      if (
        person.name === "" || //
        person.role === "" ||
        person.email === ""
      ) {
        return;
      }

      quickScanContext.setResult({
        ...quickScanContext.result,
        person,
        comment: formData.get("comment") as string
      });

      history.push(RoutePath.QuickScanResult);
    },
    [quickScanContext, history]
  );

  // Check if all questions have been answered
  const guard =
    quickScanContext.response &&
    quickScanContext.response.quickScanQuestions.some(
      question => quickScanContext.result.answers[question._id] == null
    );

  if (guard) {
    return <Redirect to={RoutePath.QuickScanQuestions} />;
  }

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
            Contactgegevens
          </FormHeading>

          <InputGroup>
            <Input
              label="Volledige naam"
              name="name"
              tooltip={requiredTooltip}
            />
            <Input label="Functie" name="role" tooltip={requiredTooltip} />
            <Input label="E-mailadres" name="email" tooltip={requiredTooltip} />
            <Input label="Telefoonnummer" name="phone" />
            <Input label="Opmerking" name="comment" />
          </InputGroup>

          <SubmitButton type="submit">Bekijk mijn bedrijfsprofiel</SubmitButton>
        </FormWrapper>
      </Content>
    </Fragment>
  );
};

export default QuickScanContactDetails;
