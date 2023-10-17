import logo from "./logo.svg";
import "./App.css";
import SideBarComponent from "./Components/SideBarComponent";
import DashBoardComponent from "./Components/DashBoardComponenet";
import Bar from "./Components/Bar";
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <div className="App">
      <div className="first show-sidebar">
        <SideBarComponent />
      </div>
      <div className="second">
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
