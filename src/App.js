import React,{ useState } from 'react';
import './App.css';


///
import UserAppointments from './pages/UserAppointments';
import MyDatePicker from './components/Date_Picker/DatePicker';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// pages
import About from "./pages/About"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Questions from "./pages/Questions"
import Services from "./pages/Services"
import SignIn from "./pages/SignIn"
import Layout from "./components/Layouts/Layout"
import UserLayout from "./components/Layouts/UserLayout"
import UserProfile from "./pages/user/Profile"
import UserBookings from "./pages/user/Bookings"
///


function App() {

  return (
    <BrowserRouter>
    <Link to="/DatePicker">Date Picker</Link>
    <Link to="/User Appointments">User Appointments</Link>
      <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route path="Home" element={<Home/>} />
          
          <Route path="/User Appointments" element = {<UserAppointments/>}/>
          <Route path="About" element={<About/>} />
          <Route path="Booking" element={<Booking/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Questions" element={<Questions/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="SignIn" element={<SignIn/>} />
          <Route path="SignIn" element = {<UserLayout/>}>
            <Route path="profile" element={<UserProfile/>}/>
            <Route path="bookings" element={<UserBookings/>}/>
            <Route path="newBooking" element={<MyDatePicker eventDuration={50} bookedSlots={2}/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //  
    //       {/* <AppointmentsContainer appointments={appointments}/> */}
    //      <MyDatePicker eventDuration={50} bookedSlots={2} form="external-form"/>
    // </div>
   

  );
}

export default App;

