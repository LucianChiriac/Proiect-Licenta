import React,{ useState } from 'react';
import './App.css';


///
import UserAppointments from './pages/UserAppointments';
import MyDatePicker from './components/Date_Picker/DatePicker';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route, Link } from "react-router-dom"
// pages
import About from "./pages/About"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Questions from "./pages/Questions"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Layout from "./components/Layouts/Layout"
import UserLayout from "./components/Layouts/UserLayout"
import UserProfile from "./pages/user/Profile"
import UserBookings from "./pages/user/UserBookings"
import SelectService from "./pages/user/SelectService"
///
import Error from "./Error"
import {loader as servicesLoader } from './components/Available Services/AvailableServices';
import { Loader as userAppointmentsLoader } from './pages/user/UserBookings'
import { Authenticator } from '@aws-amplify/ui-react';
import { RequireAuth } from './components/RequireAuth';
import NewAppointment from './pages/user/NewAppointment';
import StepContextProvider from './StepperContext';
const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element ={<Layout/>}>
          <Route path="Home" element={<Home/>} />
          <Route path="/User Appointments" element = {<UserAppointments/>}/>
          <Route path="About" element={<About/>} />
          <Route path="Booking" element={<Booking/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Questions" element={<Questions/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="login" element={<Login/>} />
          <Route path="user" 
                element = {
                            <RequireAuth>
                              <UserLayout/>
                            </RequireAuth>
                          }>
            <Route index element={<UserProfile/>} />
            <Route path="profile" element={
                <UserProfile/>
            }/>
            <Route 
              path="bookings" 
              element={<UserBookings/>}
            />
            <Route path="newBooking" 
              //element={<SelectService/>}
              element={
              <StepContextProvider>
                <NewAppointment/>
              </StepContextProvider>}
              loader={servicesLoader}
            >
            </Route>
          </Route>
        </Route>
))


function App() {

  return (
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>
  );
}

export default App;

