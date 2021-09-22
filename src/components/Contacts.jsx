import React from "react";
import Contact from "./Contact";
import {contacts} from "../data"
//other things and stuff

// function Contacts() {
//     return(
//     <nav>
//     <h2>Contacts</h2>
//     <ul className="contacts">
//       <li className="contact">
//         <div className="icon">A</div>
//         Angela
//       </li>
//       <li className="contact active">
//         <div className="icon">P</div>
//         Pamela
//       </li>
//       <li className="contact">
//         <div className="icon">S</div>
//         Sandra
//       </li>
//       <li className="contact">
//         <div className="icon">R</div>
//         Rita
//       </li>
//     </ul>
//   </nav>
//   )
// }

function Contacts(props){
    console.log(props);
    const contactList = contacts.map(c => <Contact name={c.name} />)
    // [<Contact />, <Contact />, <Contact /> ]
    return(
        <>
        <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {contactList}
        </ul>
        </nav>
        </>
    )
}
export default Contacts