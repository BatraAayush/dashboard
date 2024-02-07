import { useSelector } from "react-redux";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import "./styles/App.css";
import EmployeeChart from "./components/EmployeesChart/EmployeesChart";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Graphs from "./pages/Graphs/Graphs";

function App() {
  const employees = useSelector((state) => state.dashboardReducer.employees);
  const noOfEmployees = employees.length;
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/graphs" element={<Graphs />}/>
      </Routes>
    </div>
  );
}

export default App;
