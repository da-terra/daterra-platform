import Icon from "../../../components/general/Icon";

const requiredValidator = (value: string) => {
  if (value !== "") {
    return null;
  }

  return {
    icon: Icon.Error,
    children: "Dit veld is verplicht"
  };
};

export default requiredValidator;
