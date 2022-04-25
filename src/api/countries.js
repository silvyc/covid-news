export const getCountries = () => {
  const request = fetch("http://localhost:8000/countries/countries");
  return request;
};
