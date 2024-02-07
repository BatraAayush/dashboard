import React from 'react'
import AddEmployee from '../../components/AddEmployee/AddEmployee'
import EmployeesList from '../../components/EmployeesList/EmployeesList'
import { useSelector } from 'react-redux';

import "./styles/Home.css";

const Home = () => {
    const employees = useSelector((state) => state.dashboardReducer.employees);
    const noOfEmployees = employees.length;
  return (
    <div className='home'>
        <AddEmployee/>
        <div>Total Employees: {noOfEmployees}</div>
        <EmployeesList />

    </div>
  )
}

export default Home