import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./assets/pages/home/Home"
import Login from "./assets/pages/login/Login"
import SignUp from "./assets/pages/signup/Signup"
import { Toaster }from "react-hot-toast";
import { useAuthContext } from "./components/context/AuthContext";

function App() {
  const {authUser}=useAuthContext()
  return (
    <div className="p-4 h-screen flex justify-center items-center">
     <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"}/> }></Route>
      <Route path="/login" element={authUser ? <Navigate to ="/"/> : <Login/>}></Route>
      <Route path="/signup" element={authUser ? <Navigate to ="/"/> :  <SignUp/>}></Route>
     </Routes>
     <Toaster/>
    </div>
  );
}

export default App;
