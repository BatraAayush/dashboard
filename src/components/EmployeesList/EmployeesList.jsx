import { useDispatch, useSelector } from "react-redux";
import "./style/EmployeesList.css";
import React, { useEffect } from "react";
import { fetchEmployees } from "../../redux/features/dashboard/dashboard.slice";

const EmployeesList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.dashboardReducer.employees);
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  return (
    <table className="my-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(
          ({ id, employee_name, employee_age, employee_salary }) => (
            <tr key={id}>
              <td>{employee_name}</td>
              <td>{employee_age}</td>
              <td>{employee_salary}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default EmployeesList;
