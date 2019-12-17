import Icon from "../../../components/general/Icon";

const optionalPhoneValidator = (value: string) => {
  if (value === "") {
    return null
  }

  const isValid = /^[+() 0-9]+$/gi.test(value);

  if (isValid) {
    return null;
  }

  return {
    icon: Icon.Error,
    children: "Opgegeven telefoonnummer is niet geldig"
  }
};

export default optionalPhoneValidator;