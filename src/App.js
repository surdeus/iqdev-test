//import logo from './logo.svg';
import './App.css';

import React, {useState} from "react" ;

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link
} from "react-router-dom" ;

function Layout() {
  return (<>
    <Link to="test">Test</Link>
    <Link to="test1">Test 2</Link>
    <Outlet />
  </>)
}

function Test() {
  return (
    <>
      <div>Test shit</div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />} >
          <Route index element={<div>Index shit</div>} />
          <Route path="test" element={ <Test /> } />
          <Route path="test1" element={ <div>Test 2</div> } />
          <Route path="*" element={<div>No shit</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
