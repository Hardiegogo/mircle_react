import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import RequireAuth from "./utils/RequireAuth";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { getUsers } from "./utils/user-utils/user-services";
import { getPosts } from "./utils/post-utils/post-services";
import PostModal from "./components/PostModal";
import Profile from "./pages/Profile";
import { setCurrentUser  } from "./redux/features/userSlice";

function App() {
  const dispatch=useDispatch()
  const isModalOpen=useSelector(state=>state.posts.isModalOpen)
  const currentUser=useSelector(state=>state.auth.loggedInUser)
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getPosts())
    dispatch(setCurrentUser(currentUser))
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
        <Route path='/user/:id' element={<RequireAuth><Profile/></RequireAuth>}/>
      </Routes>
      {isModalOpen && <PostModal/>}
    </div>
  );
}

export default App;
