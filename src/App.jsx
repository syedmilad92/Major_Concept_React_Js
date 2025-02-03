import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassingStateWithNavigation from "./components/passingStateWithNavigation";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PassingStateWithNavigation/>} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
