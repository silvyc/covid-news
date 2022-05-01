import { Box, VStack } from "@chakra-ui/react";
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
import { getCovidMonthlyDeaths, getCovidMonthlyHundredCases, getCovidMonthlyNewData } from "../api/covidcasesdaily";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Data",
    },
  },
};
export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly New Data",
    },
  },
};
export const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Per Hundred Data",
    },
  },
};


export default function Daily() {
  const [countriesDaily, setCountriesDaily] = useState([]);
  const [countriesNewData, setNewData] = useState([]);
  const [countriesHundredCases, setHundredCases] = useState([]);

  const labels = useMemo(
    () => countriesDaily.map((country) => country.month),
    [countriesDaily]
  );

  const data1 = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Deaths",
          data: countriesDaily.map((country) => country.total_deaths),
          backgroundColor: 'rgba(54, 99, 255, 0.4)',
        },
        {
          label: "Recovered",
          data: countriesDaily.map((country) => country.total_recovered),
          backgroundColor: 'rgba(54, 99, 255, 0.6)',
        },
        {
          label: "Confirmed",
          data: countriesDaily.map((country) => country.total_confirmed),
          backgroundColor: 'rgba(54, 99, 255, 0.8)',
        },
        {
          label: "Active",
          data: countriesDaily.map((country) => country.total_active),
          backgroundColor: 'rgba(54, 99, 255, 1)',
        },
      ],
    }),
    [countriesDaily, labels]
  );
  
  const data2 = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "New Cases",
          data: countriesNewData.map((newcases) => newcases.new_cases),
          backgroundColor: 'rgba(54, 99, 255, 0.4)',
        },
        {
          label: "New Deaths",
          data: countriesNewData.map((newcases) => newcases.new_deaths),
          backgroundColor: 'rgba(54, 99, 255, 0.6)',
        },
        {
          label: "New Recovered",
          data: countriesNewData.map((newcases) => newcases.new_recovered),
          backgroundColor: 'rgba(54, 99, 255, 0.8)',
        },
      ],
    }),
    [countriesNewData, labels]
  );
  
  const data3 = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Deaths per 100 Cases",
          data: countriesHundredCases.map((hundredcases) => hundredcases.deaths_100cases),
          backgroundColor: 'rgba(54, 99, 255, 0.4)',
        },
        {
          label: "Recovered per 100 Cases",
          data: countriesHundredCases.map((hundredcases) => hundredcases.recovered_100cases),
          backgroundColor: 'rgba(54, 99, 255, 0.6)',
        },
        {
          label: "Deaths per 100 Recovered",
          data: countriesHundredCases.map((hundredcases) => hundredcases.deaths_100recovered),
          backgroundColor: 'rgba(54, 99, 255, 0.8)',
        },
      ],
    }),
    [countriesHundredCases, labels]
  );

  useEffect(() => {
    getCovidMonthlyDeaths().then((data1) => setCountriesDaily(data1));
    getCovidMonthlyNewData().then((data2) => setNewData(data2));
    getCovidMonthlyHundredCases().then((data3) => setHundredCases(data3));
  }, []);

  return (
    <Box
      width={{
        base: "50vw",
        sm: "80vw",
        md: "50vw",
      }}
    > 
      <VStack spacing={20}>
      <Bar data={data1} options={options1} />
      <Bar data={data2} options={options2} />
      <Bar data={data3} options={options3} />
      </VStack>
      
    </Box>
    
  );
}
