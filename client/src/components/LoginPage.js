// LoginPage.js
import React, { useState } from 'react';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log("Username: " + username);
        console.log("Password: " + password);
        console.log("Remember Me: " + remember);
    };

    return (
        <div className="wrapper">
          <h1> Hello world</h1>
        </div>
    );
}




