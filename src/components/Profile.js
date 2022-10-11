import React, {  } from "react";
import { Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AuthService from "../context/AuthService";

const Profile= () => {
    return (
    <div>
        <Card>
            <Card.Body>
        <h3>
            {AuthService.getCurrentUser()}
        </h3>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Profile;