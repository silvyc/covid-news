export const getCountries = () => {
  const request = fetch("http://localhost:8000/graphs", {
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json'}),
    mode: 'no-cors'
  });
  return request;
};
