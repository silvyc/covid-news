export const getCovidMonthlyDeaths = async () => {
  try {
    const request = await fetch(
      "https://bddprueba.herokuapp.com/graphs/covid-monthly-deaths",
      {
        method: "GET",
        headers: new Headers({ "Content-type": "application/json" }),
        mode: "cors",
      }
    );
    const data = await request.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getCovidMonthlyNewData = async () => {
  try {
    const request = await fetch(
      "https://bddprueba.herokuapp.com/graphs/covid-monthly-newdata",
      {
        method: "GET",
        headers: new Headers({ "Content-type": "application/json" }),
        mode: "cors",
      }
    );
    const data = await request.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getCovidMonthlyHundredCases = async () => {
  try {
    const request = await fetch(
      "https://bddprueba.herokuapp.com/graphs/covid-monthly-perhundred",
      {
        method: "GET",
        headers: new Headers({ "Content-type": "application/json" }),
        mode: "cors",
      }
    );
    const data = await request.json();
    return data;
  } catch (error) {
    return [];
  }
};