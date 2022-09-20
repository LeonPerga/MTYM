// import React, { useContext } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
// import AuthContext from "../context/AuthContext";


// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const handleSubmit = e => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     email.length > 0 && loginUser(email, password);
//   };
//   return (
//     <div class="container h-100 d-flex justify-content-center text-right">
//       <div class="jumbotron my-auto" dir="rtl">
//       <Card>
//         <Card.Body>
//           <Form>
//             <h2>התחברות</h2>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>כתובת אימייל</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="כתובת אימייל"
//                 value={email}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>סיסמה</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="סיסמה"
//                 value={password}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleSubmit} href="/">
//               הכנס
//             </Button>
//             <p>
//               אין לך משתמש? הרשם/י <a href="/signup">כאן</a>
//             </p>
//           </Form>
//         </Card.Body>
//       </Card>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;