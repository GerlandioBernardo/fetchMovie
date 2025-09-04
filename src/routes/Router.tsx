import {Routes, Route} from "react-router-dom";
import Home from '../pages/home/Home';
import FavoriteMovie from '../pages/favorites/FavoriteMovie';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/favorite' element={<FavoriteMovie/>}/>
    </Routes>
  )
}
