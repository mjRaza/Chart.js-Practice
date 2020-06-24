import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export const Test = () => {
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeee, setEmployeee] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);
  const employeeSal = [];
  const employeeAg = [];
  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((data) => {
        data.data.filter((x) => {
          employeeSal.push(+x.employee_salary);
          employeeAg.push(+x.employee_age);
        });
        console.log("v", employeeSal);
      });
  }, []);
  const data = {
    labels: employeeAg,
    datasets: [
      {
        label: "# of Votes",
        data: employeeSal,
        backgroundColor: "red",
      },
    ],
  };
  const option = {
    responsive: "true",
    title: { display: true, text: "Line Chart" },
    scales: {
      yAxes: [
        {
          // ticks: {
          //   min: 0,
          //   max: 15,
          //   stepSize: 1,
          // },
          gridLines: { display: false },
        },
      ],

      xAxes: [
        {
          gridLines: { display: false },
        },
      ],
    },
  };
  return (
    <>
      {employeeSal ? (
        <div style={{ height: "700px", width: "100%" }}>
          <Line data={data} options={option} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}

      {/* <Bar data={data} options={option} />
        <Line data={data} options={option} /> */}
    </>
  );
};
