export const getCovidRegionInfo = async () => {
    try {
      const request = await fetch(
        "https://bddprueba.herokuapp.com/graphs/covid-region-info",
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

export const getCovidRegionNew = async () => {
    try {
      const request = await fetch(
        "https://bddprueba.herokuapp.com/graphs/covid-region-newdata",
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

export const getCovidRegionHundred = async () => {
    try {
      const request = await fetch(
        "https://bddprueba.herokuapp.com/graphs/covid-region-perhundred",
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