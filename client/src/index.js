import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ViewForm from './ViewForm';
import Update from './Update';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/details' element={<ViewForm/>}/>
    <Route path='/update/:id' element={<Update/>}/>


  </Routes>
  </BrowserRouter>


);