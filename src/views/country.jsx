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
import { Bar } from "react-chartjs-2";
import {
  getCovidRegionHundred,
  getCovidRegionInfo,
  getCovidRegionNew,
} from "../api/covidcasescountry";

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
      text: "Region Data",
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
      text: "Region New Data",
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
      text: "Region Per Hundred Data",
    },
  },
};

export default function Daily() {
  const [regionInfo, setRegionInfo] = useState([]);
  const [regionNewData, setRegionNewData] = useState([]);
  const [regionHundredCases, setRegionHundredCases] = useState([]);

  const labels = useMemo(
    () => regionInfo.map((region) => region.region),
    [regionInfo]
  );

  const data1 = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Deaths",
          data: regionInfo.map((country) => country.region_deaths),
          backgroundColor: "rgba(54, 99, 255, 0.4)",
        },
        {
          label: "Recovered",
          data: regionInfo.map((country) => country.region_recovered),
          backgroundColor: "rgba(54, 99, 255, 0.6)",
        },
        {
          label: "Confirmed",
          data: regionInfo.map((country) => country.region_confirmed),
          backgroundColor: "rgba(54, 99, 255, 0.8)",
        },
        {
          label: "Active",
          data: regionInfo.map((country) => country.region_active),
          backgroundColor: "rgba(54, 99, 255, 1)",
        },
      ],
    }),
    [regionInfo, labels]
  );

  const data2 = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "New Cases",
          data: regionNewData.map((newcases) => newcases.new_cases),
          backgroundColor: "rgba(54, 99, 255, 0.4)",
        },
        {
          label: "New Deaths",
          data: regionNewData.map((newcases) => newcases.new_deaths),
          backgroundColor: "rgba(54, 99, 255, 0.6)",
        },
        {
          label: "New Recovered",
          data: regionNewData.map((newcases) => newcases.new_recovered),
          backgroundColor: "rgba(54, 99, 255, 0.8)",
        },
      ],
    }),
    [regionNewData, labels]
  );

  const data3 = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Deaths per 100 Cases",
          data: regionHundredCases.map(
            (hundredcases) => hundredcases.deaths_100cases
          ),
          backgroundColor: "rgba(54, 99, 255, 0.4)",
        },
        {
          label: "Recovered per 100 Cases",
          data: regionHundredCases.map(
            (hundredcases) => hundredcases.recovered_100cases
          ),
          backgroundColor: "rgba(54, 99, 255, 0.6)",
        },
        {
          label: "Deaths per 100 Recovered",
          data: regionHundredCases.map(
            (hundredcases) => hundredcases.deaths_100recovered
          ),
          backgroundColor: "rgba(54, 99, 255, 0.8)",
        },
      ],
    }),
    [regionHundredCases, labels]
  );

  useEffect(() => {
    getCovidRegionInfo().then((data1) => setRegionInfo(data1));
    getCovidRegionNew().then((data2) => setRegionNewData(data2));
    getCovidRegionHundred().then((data3) => setRegionHundredCases(data3));
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
