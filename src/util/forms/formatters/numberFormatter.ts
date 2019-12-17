const numberFormatter = (value: string) => {
  return value.replace(/[^0-9]/g, "");
}

export default numberFormatter;