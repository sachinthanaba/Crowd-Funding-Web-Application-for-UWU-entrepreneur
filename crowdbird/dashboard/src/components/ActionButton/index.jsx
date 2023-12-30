import React from 'react';

import './styles.css';
// import NotificationIcon from '../../assets/icons/notification.svg';
// import SettingsIcon from '../../assets/icons/settings.svg';
import * as Constant from '../../constants'

function ActionButton({ id, current_status }) {

    let new_status = "N/A"
    let status = "N/A"

    if (current_status === "APPROVED"){
        new_status = "SUSPEND"
        status = "SUSPENDED"
    }
        
    else if (current_status === "SUSPENDED"){
        new_status = "REPUBLISH"
        status = "APPROVED"
    }
        
    else if (current_status === "PENDING"){
        new_status = "APPROVE"
        status = "APPROVED"
    }
        


    function refreshPage() {
        window.location.reload(false);
      }

    const updatePost = async () => {

        const postRequest = { id,status };

        const response = await fetch(`${Constant.SERVICE_URL}/api/post`, {
            method: 'PUT',
            body: JSON.stringify(postRequest),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        const json = await response.json();
        console.log(json.toString);

        if (!response.ok) {
            // setError(json.error);

        }
        refreshPage();
        return json;

    }

    const showAlert = () => {
        alert("I'm an alert");
      }


    return (
        <div> <td><button className={'dashbord-header-btn-' + new_status} onClick={updatePost}>{new_status}</button></td></div>

    )




}

export default ActionButton;