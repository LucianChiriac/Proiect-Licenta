import React from 'react';
import AvailableServices, {loader as loaderServices} from "../../components/Available Services/AvailableServices";
import "./userPages.css"

function SelectServices(){
    return (
        <div className="userCenterPage">
            <h3>Selectati un serviciu</h3>
            <AvailableServices/>
        </div>
    )
}


export default SelectServices;