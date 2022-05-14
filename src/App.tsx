import "./App.css";
import IdPage from "./pages/student_id_page";
import Login from "./pages/login_page";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
import { useTypedSelector } from "./redux/store/utils/useStore";
import { useEffect } from "react";

function App() {
  const { accessToken, loading } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/");
    }
  }, [navigate, accessToken, loading]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student_id" element={<IdPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>

    /*
    <Student
      enrollmentNo={"047156"}
      name={"rahul"}
      fathersName={"rabindra"}
      age={21}
      course={"btech"}
      phoneNumber={"8882421909"}
      address={"aldjfklsdfjsdklfjsdkl"}
    />
    */
  );
}

export default App;
