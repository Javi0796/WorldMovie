import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Actors from './components/Actors';
import User from './components/User';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar></NavBar>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='actors' element={<Actors></Actors>}></Route>
          <Route path='user' element={<User></User>}></Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
