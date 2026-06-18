import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
