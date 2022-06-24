import React from 'react'
import { Route, Routes } from 'react-router'
import NavbarBeforeLogin from '../../components/NavbarBeforeLogin'
import Pagelogin from '../Login/Pagelogin'
import PageRegister from '../Register/PageRegsiter'

function HomeBeforeLogin() {
  return (
    <>
    <NavbarBeforeLogin></NavbarBeforeLogin>
    <Routes>
        <Route path="/register" element={<PageRegister></PageRegister>}></Route>
        <Route path="/login_user" element={<Pagelogin></Pagelogin>}></Route>
        <Route path="/" element={<Pagelogin></Pagelogin>}></Route>
      </Routes>
    
    </>
  )
}

export default HomeBeforeLogin