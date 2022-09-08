import React from 'react'
import { useState, useEffect} from 'react';
import List from './List';
import Form from './Form';
import "./style.css";

function Contacts() {
    const [contacts, setContacts] = useState ([
        {
            fullname: 'Ezgi',
            phone_number: '1234'
        },
        {
            fullname: 'Ece',
            phone_number: ' 1234657'
        },
        {
            fullname: 'Elif',
            phone_number: '435745'
        }
    ]);

    useEffect(() =>{
        console.log(contacts);
    },[contacts])
 
  return (
    <div id="container">
        <h1>Contacts App</h1>
        <List contacts={contacts}/>
        <Form addContacts ={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;