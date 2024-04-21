export const convertToUTC = (inputDateStr) => {
  const inputDate = new Date(inputDateStr);
  inputDate.setUTCHours(inputDate.getHours());

  const utcDateString = inputDate.toISOString();

  return utcDateString;
};
