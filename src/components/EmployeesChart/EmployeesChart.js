import React from "react";
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
import { useSelector } from "react-redux";
import "./styles/EmployeesChart.css";

export default function EmployeesChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        //   position: 'top' as const,
      },
      title: {
        display: true,
        text: "Employees Salary Chart",
      },
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 50,
    //     top: 50,
    //     bottom: 50,
    //   },
    // },
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        //   position: 'top' as const,
      },
      title: {
        display: true,
        text: "Employees Ages Chart",
      },
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 50,
    //     top: 50,
    //     bottom: 50,
    //   },
    // },
  };
  const employees = useSelector((state) => state.dashboardReducer.employees);
  console.log(employees);
  const labels = employees.map(({ employee_name }) => employee_name);
  const ages = employees.map(({ employee_age }) => employee_age);
  const salaries = employees.map(({ employee_salary }) => employee_salary);
  const data = {
    labels,
    datasets: [
      {
        label: "Salaries",
        data: salaries,
        backgroundColor: "rgb(214, 52, 132,0.5)",
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "Ages",
        data: ages,
        backgroundColor: "rgb(64, 162, 216,0.5)",
      },
    ],
  };
  return (
    <div className="chart-container" >
      <Bar className="chart" options={options} data={data} />
      <Bar className="chart" options={options2} data={data2} />
    </div>
  );
}
