import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <div className="App">
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
