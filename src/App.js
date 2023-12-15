import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Interface from "./components/Interface";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignupForm from "./components/SignupForm";
import Signnav from "./components/Signnav";
import Alogin from "./components/Alogin";
import Psignup from "./components/Psignup";
import Plogin from "./components/Plogin";
import Loginnav from "./components/Loginnav";

function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interface/>}></Route>
      <Route path='/Loginnav' element={<Loginnav />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/plogin' element={<Plogin/>}></Route>
      <Route path='/signnav' element={<Signnav />}></Route>
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/pregister' element={<Psignup />}></Route>
      <Route path='/admin' element={<Alogin />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
