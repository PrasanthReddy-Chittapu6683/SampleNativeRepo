export const stringOrNull = (value, format) => {
  if (value) {
    return format.replace("%s", value);
  }

  return null;
};
