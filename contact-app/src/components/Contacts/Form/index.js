import React from 'react';
import {useState, useEffect} from "react";


const initialFormValues = { fullname:"", phone_number:""}
function Form({addContacts, contacts}) {
    const[form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues); //girilen verileri formda görüntü kalamsını engellemek
    }, [contacts])

    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault(); //form bilgisi aldığında durdurmak

        if(form.fullname === '' || form.phone_number === ''){  
            return false;
        }  // formda boş bilgi alıp almadığını kontrol etmek

        addContacts([...contacts, form]);

       //setForm(initialFormValues); girilen verileri formda görüntü kalamsını engellemek
    }

    return (
    <form onSubmit = {onSubmit}>
        <div>
        <input 
        name="fullname" 
        placeholder='Full Name' 
        value={form.fullname}
        onChange = {onChangeInput}/>
        </div>

        <div>
        <input 
        name ="phone_number" 
        placeholder='Phone Number' 
        value={form.phone_number}
        onChange = {onChangeInput}/>
        </div>

        <div className="btn">
            <button>Add</button>
        </div>

    </form>
  )
}

export default Form