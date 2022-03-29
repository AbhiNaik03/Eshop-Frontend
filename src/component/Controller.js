import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';

export default function Controller() {
    let baseURL = "http://localhost:8085/";
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home baseURL={baseURL} loginModal={false} regitersModal={false}/>}/>
                <Route exact path='/login' element={<Home baseURL={baseURL} loginModal={true} regitersModal={false}/>}/>
                <Route exact path='/signup' element={<Home baseURL={baseURL} loginModal={false} regitersModal={true}/>}/>
                <Route exact path='/products' element={<Products baseURL={baseURL} loginModal={false} regitersModal={false}/>}/>
            </Routes>
        </BrowserRouter>
    );
}