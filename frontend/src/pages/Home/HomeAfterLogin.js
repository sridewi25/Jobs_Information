import React from 'react'
import NavbarAfterLogin from '../../components/NavbarAfterLogin'
import JobsInformation from '../Jobs/JobsInformation'
import DetailJobs from '../Jobs/DetailJobs'
import { Routes,Route } from 'react-router-dom'

function HomeAfterLogin() {
  return (
    <>
    <NavbarAfterLogin></NavbarAfterLogin>
    <Routes>
    <Route path="">
    <Route path="" element={<JobsInformation></JobsInformation>}></Route>
    <Route path="info">
      <Route path=":id" element={<DetailJobs></DetailJobs>}></Route>
    </Route>
  </Route>
</Routes>
</>
  )
}

export default HomeAfterLogin