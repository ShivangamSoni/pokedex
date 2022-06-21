import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Details from "./Pages/Details";
import Listing from "./Pages/Listing";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
