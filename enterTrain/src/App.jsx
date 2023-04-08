import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";


import { Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';

function App() {
  return (
    <>
     <Header />

<div className="app">
 <Container>
<Routes>
<Route path="/" element={<Trending/>} exact/>
<Route path="/movies" element={<Movies/>}/>
<Route path="/series" element={<Series/>}/>
<Route path="/search" element={<Search/>}/>

</Routes>

 </Container>
  
  </div>
<SimpleBottomNavigation />
</>
);
}
    
     

export default App;
