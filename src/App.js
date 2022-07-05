import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import RequireAuth from "./utils/RequireAuth";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getUsers } from "./utils/user-utils/user-services";
import { getPosts } from "./utils/post-utils/post-services";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getPosts())
  },[dispatch])
  return (
    <div className="App min-h-screen transform-none ">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {/* Auth routes */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* Private routes */}
        <Route path='/feed' element={<RequireAuth> <Feed/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
