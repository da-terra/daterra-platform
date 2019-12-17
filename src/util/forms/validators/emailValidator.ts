import Icon from "../../../components/general/Icon";

const emailValidator = (value: string) => {
  const isValid = /^.+@[a-z0-9-.]+\.[a-z0-9-]{2,63}$/.test(value);

  if (isValid) {
    return null;
  }

  return {
    icon: Icon.Error,
    children: "Opgegeven e-mailadres is niet geldig"
  };
};

export default emailValidator;
