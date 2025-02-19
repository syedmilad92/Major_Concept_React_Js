import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassingStateWithNavigation from "./components/passingStateWithNavigation";
import TodoApp from "./components/TodoApp";
import DetailsPage from "./components/DetailsPage";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<PassingStateWithNavigation/>} />
    //     <Route path="/details/:id" element={<DetailsPage />} />
    //   </Routes>
    // </Router>
    <TodoApp/>
    // <DisplayData/>
  );
}

export default App;
