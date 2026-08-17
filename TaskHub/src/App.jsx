import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import TaskDetails from './pages/TaskDetails';
import Notes from './pages/Notes';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import Hi from './pages/Hi';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/tasks/:id' element={<TaskDetails />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App