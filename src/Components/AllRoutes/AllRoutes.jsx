import React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from "../Pages/Dashbaord"
import Trainings from '../Pages/Trainings';
import Users from "../Pages/Users";
import Analytics from "../Pages/Analytics";
import Account from "../Pages/Account";
import Support from "../Pages/Support";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Dashboard/>} />
         <Route path='/trainings' element={<Trainings/>} />
         <Route path='/users' element={<Users/>} />
         <Route path='/analytics' element={<Analytics/>} />
         <Route path='/account' element={<Account/>} />
         <Route path='/support' element={<Support/>} />
      </Routes>
    </div>
  );
}
