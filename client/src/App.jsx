import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import DisplayOne from './components/DisplayOne';
import Nav from './components/Nav';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
          <Routes>
            <Route index />
            <Route path="/products/create" element={ <Form /> } />
            <Route path="/products" element={ <DisplayList /> } />
            <Route path="/products/:id" element={ <DisplayOne /> } />
            <Route path="/products/update/:id" element={ <UpdateForm /> } />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
