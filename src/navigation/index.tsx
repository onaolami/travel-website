
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/homepage";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default RootNavigation;
