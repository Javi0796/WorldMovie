import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesByGenre from './components/MoviesByGenre';
import Home from './components/Home';
import Actors from './components/Actors';
import MainActor from './components/MainActor';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar></NavBar>}>
          <Route path='movie-genre-list' element={<MoviesByGenre></MoviesByGenre>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='actors' element={<Actors></Actors>}></Route>
          <Route path='actors/Main_actor' element={<MainActor></MainActor>}></Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
