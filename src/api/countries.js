export const getCountries = async () => {
  try {
    const request = await fetch("http://localhost:8000/countries/", {
      method: "GET",
      headers: new Headers({ "Content-type": "application/json" }),
      mode: "cors",
    });
    const data = await request.json();
    return data;
  } catch (error) {
    return [];
  }
};
