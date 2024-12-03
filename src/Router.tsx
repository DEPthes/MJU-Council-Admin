import { BrowserRouter, Route, Routes } from "react-router-dom";
import PolicyList from "./pages/ActivityReport/PolicyList";
import Home from "./pages/Home";
import Login from "./components/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/activityReport/policyList" element={<PolicyList />} />
        <Route 
          path="/login" 
          element={<Login />} 
        />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
