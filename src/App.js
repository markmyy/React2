import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AdminLogin from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import CustomerIndex from './components/admin/customer/Index';
import CustomerCreate from './components/admin/customer/Create';
import CustomerView from './components/admin/customer/View';
import CustomerUpdate from './components/admin/customer/Update';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path='/' element={<SignIn/>} />
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='/signup' element={<SignUp/>}/>

        <Route exact path='/admin' element={<Dashboard/>}/>
        <Route exact path='/admin/login' element={<AdminLogin/>}/>        
        <Route exact path='/admin/customer' element={<CustomerIndex/>}/>
        <Route exact path='/admin/customer/create' element={<CustomerCreate/>}/>  
        <Route exact path='/admin/customer/view/:id' element={<CustomerView/>}/>      
        <Route exact path='/admin/customer/update/:id' element={<CustomerUpdate/>}/>

      </Routes>
    </Router>
  );
}

export default App;
