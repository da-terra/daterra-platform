const mergeFormData = (a: FormData, b: FormData): FormData => {
  Array.from(b.entries()).forEach(keyValuePair => {
    a.set(...keyValuePair);
  });

  return a;
};

export default mergeFormData;
