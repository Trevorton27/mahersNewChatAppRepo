import React, { useState } from "react";
import Users from "./components/Users";
import TypeMessage from "./components/TypeMessage";
import ChatScreen from "./components/ChatScreen";
import Style from "./Style.css";

// const express = require("express");
// const path = require("path");

// const app = express();

// app.use("/", express.static(path.join(__dirname, "client/build")));

// app.listen(3000);

// import {
//   Container,
//   Col,
//   Row,
//   InputGroup,
//   Button,
//   Form,
//   FormControl,
// } from "react-bootstrap";

// CREATIND API ENDPOINTS
// 1. Get all messages - GET: "api/messages"
// 2. Create a chat message - POST: "api/message"
// 3. Get all users - GET: "api/users"
// 4. Create a user - POST:"api/users"
// 5. GEt a single user = GET:"api/users/{id}"

const App = () => {
  // const [users, setUsers] = useState([]);

  const [messages, setMessages] = useState([]);

  let textInputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([
      { ...messages, text: textInputRef.current.value, username: "Maher" },
    ]);
    textInputRef.current.value = "";
  };

  const chatMessages = messages.map(chat => {
    return (
      <p>
        {chat.text}({chat.username})
      </p>
    );
  });

  return (
    <div className="container">
      <div className="user">USERS</div>
      <div className="row">
        <form className="text-center" onSubmit={handleSubmit}>
          <div className="chatscreen">{chatMessages}</div>
          <input
            ref={textInputRef}
            type="text"
            required
            className="input"
            placeholder="Write a message..."
          ></input>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );

  //

  // return (
  //   <div className="container">
  //     <Users/>
  //     <TypeMessage/>
  //     <ChatScreen/>
  //   </div>
  // );
};
export default App;
