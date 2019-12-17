import Icon from "../../../components/general/Icon";

const urlValidator = (value: string) => {
  if (value === "") {
    return null
  }

  const isValid = /^(https?:\/\/)?[a-z0-9-.]+\.[a-z0-9-]{2,63}\/?$/ig.test(value);

  if (isValid) {
    return null;
  }

  return {
    icon: Icon.Error,
    children: "Opgegeven url is niet geldig"
  }
};

export default urlValidator;