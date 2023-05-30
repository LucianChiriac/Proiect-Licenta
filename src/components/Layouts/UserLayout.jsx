import React from "react"
import { Outlet } from "react-router-dom"
import MainMenuUser from "../MainMenuUser/MainMenuUser"
import "./UserLayout.css"

export default function userLayout() {
    return (
        <div className="userLayoutPage" id="userLayoutPage">
            <MainMenuUser />
            <div className="outletWrapper" id="outletWrapper">
                <Outlet className="outlet" />
            </div>
        </div>
    )
}