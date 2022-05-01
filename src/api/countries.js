export const getCountries = async () => {
  try {
    const request = await fetch("https://bddprueba.herokuapp.com/countries/", {
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
