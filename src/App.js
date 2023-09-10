import "./styles.css";
import { RxDashboard, RxListBullet, RxBarChart } from "react-icons/rx";
export default function App() {
  document.querySelector("body").style.backgroundColor = "wheat";
  return (
    <div className="App">
      <div className="sidebar">
        <button>
          <RxDashboard />
          Dashboard
        </button>
        <button>
          <RxListBullet />
          Products
        </button>
        <button>
          <RxBarChart />
          Sales
        </button>
      </div>
    </div>
  );
}
