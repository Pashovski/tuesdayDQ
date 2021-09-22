import React from "react";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Form from "./Form";

import { messages, contacts } from "../data";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
     <Contacts meat="beef" />
     <Messages />
     <Form />
    </div>
  );
}

export default App;

//{{contacts.map(c => name={contacts.name})}