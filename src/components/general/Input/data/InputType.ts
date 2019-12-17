enum InputType {
  Text = "text",
  // Use tel input type for numbers because it won't always trigger the on change event
  Number = "tel",
  Search = "search",
  Email = "email",
  Phone = "tel",
  Password = "password"
}

export default InputType;
