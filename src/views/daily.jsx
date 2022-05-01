import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getCovidMonthlyDeaths } from "../api/covidcasesdaily";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export default function Daily() {
  const [countriesDaily, setCountriesDaily] = useState([]);

  const labels = useMemo(
    () => countriesDaily.map((country) => country.month),
    [countriesDaily]
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Muertes",
          data: countriesDaily.map((country) => country.total_deaths),
          backgroundColor: "red",
          stack: "Stack 0",
        },
        {
          label: "Recuperados",
          data: countriesDaily.map((country) => country.total_recovered),
          backgroundColor: "green",
          stack: "Stack 1",
        },
      ],
    }),
    [countriesDaily, labels]
  );

  useEffect(() => {
    getCovidMonthlyDeaths().then((data) => setCountriesDaily(data));
  }, []);

  return (
    <Box
      height="60vh"
      width={{
        base: "50vw",
        sm: "80vw",
        md: "50vw",
      }}
    >
      <Bar data={data} options={options} />
    </Box>
  );
}
