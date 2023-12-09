import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Interface from "./components/Interface";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interface/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
