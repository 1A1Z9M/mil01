import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Thismonth } from "./pages/Thismonth";
import { Past } from "./pages/Past";

const App = () => {
  return (
    <BrowserRouter>
      <h1>kakeibo</h1>
      <ul>
        <li>
          <Link to="/thismonth">今月の支出</Link>
        </li>
        <li>
          <Link to="/past">過去の支出(未作成)</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/thismonth" element={<Thismonth />} />
        <Route path="/past" element={<Past />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
