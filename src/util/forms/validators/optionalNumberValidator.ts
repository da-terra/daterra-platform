import Icon from "../../../components/general/Icon";

const numberValidator = (value: string) => {
  if (value === "") {
    return null;
  }

  const isValid = /^[0-9]+$/.test(value);

  if (isValid) {
    return null;
  }

  return {
    icon: Icon.Error,
    children: "In dit veld zijn alleen nummers toegstaan"
  };
};

export default numberValidator;
