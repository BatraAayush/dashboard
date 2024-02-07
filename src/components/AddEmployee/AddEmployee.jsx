import "./styles/AddEmployee.css";
import { FaAngleDown } from "react-icons/fa";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/features/dashboard/dashboard.slice";

const AddEmployee = () => {
  const [showAddBox, setShowAddBox] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();
  const dispatch = useDispatch();

  const addHandler = (e) => {
    console.log("clicked")
    e.preventDefault();
    const employee = {
      employee_name: name,
      employee_age: Number(age),
      employee_salary: Number(salary),
    };
    dispatch(addEmployee(employee));
    setName("");
    setAge("");
    setSalary("");
  };

  const clearHandler = () => {
    setName("");
    setAge("");
    setSalary("");
  };
  return (
    <div className="add-employee">
      <div className="add-btn" onClick={() => setShowAddBox(!showAddBox)}>
        Add Employee{" "}
        <FaAngleDown
          style={showAddBox ? { transform: "rotate(180deg)" } : null}
        />
      </div>
      {showAddBox && (
        <form onSubmit={addHandler} className="add-form">
          <label>Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            required
          />
          <br />
          <label>Age: </label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            value={age}
            required
          />
          <br />
          <label>Salary: </label>
          <input
            onChange={(e) => setSalary(e.target.value)}
            type="number"
            value={salary}
            required
          />
          <br />
          <button className="add-btn" type="submit">ADD</button>
          <button className="add-btn" onClick={clearHandler}>CLEAR</button>
        </form>
      )}
    </div>
  );
};

export default AddEmployee;
