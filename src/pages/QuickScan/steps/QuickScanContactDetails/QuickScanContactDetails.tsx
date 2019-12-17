import React, { Fragment, useContext, useCallback } from "react";
import { useHistory, Redirect } from "react-router";
import { FontColor } from "../../../../data/style/variables";
import RoutePath from "../../../../data/RoutePath";
import InputType from "../../../../components/general/Input/data/InputType";
import requiredValidator from "../../../../util/forms/validators/requiredValidator";
import emailValidator from "../../../../util/forms/validators/emailValidator";
import phoneValidator from "../../../../util/forms/validators/optionalPhoneValidator";
import phoneFormatter from "../../../../util/forms/formatters/phoneFormatter";
import { WrapperWidth } from "../../../../components/general/Wrapper";
import { HeadingType } from "../../../../components/general/Heading";
import { Context as QuickScanContext } from "../../QuickScan";
import {
  Header,
  Circle,
  Form,
  FormHeading,
  FormParagraph,
  InputGroup,
  Input,
  SubmitButton,
  Wrapper
} from "./styled";

const inputs = {
  name: {
    label: "Volledige naam",
    name: "name",
    validator: requiredValidator
  },
  role: {
    label: "Functie",
    name: "role",
    validator: requiredValidator
  },
  email: {
    label: "E-mailadres",
    name: "email",
    type: InputType.Email,
    validator: emailValidator
  },
  phone: {
    label: "Telefoonnummer",
    name: "phone",
    type: InputType.Phone,
    formatter: phoneFormatter,
    validator: phoneValidator
  },
  comment: {
    label: "Opmerking",
    name: "comment"
  }
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
    quickScanContext.data &&
    quickScanContext.data.quickScanQuestions.some(
      question => quickScanContext.result.answers[question._id] == null
    );

  if (guard) {
    return <Redirect to={RoutePath.QuickScanQuestions} />;
  }

  return (
    <Fragment>
      <Header />

      <Circle x={25} y={-20} />

      <Wrapper width={WrapperWidth.Smaller}>
        <Form onSubmit={submitHandler}>
          <FormHeading
            headingType={HeadingType.Secondary}
            fontColor={FontColor.Accent}
          >
            Contactgegevens
          </FormHeading>

          <FormParagraph>
            Mocht u de resultaten vrijblijvend terug willen zien, worden deze
            naar u gemaild nadat u de volgende gegevens heeft invoert.
          </FormParagraph>

          <InputGroup>
            <Input {...inputs.name} />
            <Input {...inputs.role} />
            <Input {...inputs.email} />
            <Input {...inputs.phone} />
            <Input {...inputs.comment} />
          </InputGroup>

          <SubmitButton type="submit">Bekijk mijn bedrijfsprofiel</SubmitButton>
        </Form>
      </Wrapper>
    </Fragment>
  );
};

export default QuickScanContactDetails;
