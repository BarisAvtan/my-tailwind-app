import { Card, Typography } from "@material-tailwind/react";
import Home from "./Home";
import Sidebar from "./Sidebar ";
import Navbar from "./Navbar";
import Login from "./Login";
 
const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
 
function App() {
  return (

  // <Home/>
  <>
<Login/>
  {/* <Navbar/>
  <Sidebar /> */}
  </>
  );
}

export default App;