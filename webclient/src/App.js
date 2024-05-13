import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Patients from "./Components/Patinets/Patients";
import Diseases from "./Components/Diseases/Diseases";
import Doctors from "./Components/Doctors/Doctors";
import ComponentTest from "./Components/ComponentTest/ComponentTest";

function App() {
  return (
    <>
      <Navigation />
      <div className="container p-2">
        <Routes>
          <Route path="/" element={<Patients />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
