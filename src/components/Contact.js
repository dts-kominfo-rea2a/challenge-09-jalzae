// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';

import React from 'react';

const Contact = ({ datas }) => {
    return (
        <div>
            {datas.map(e => (
                <div className='box' key={e.name}>
                    <img className='rounded' src={e.photo} alt=""></img>
                    <div className='block'>
                        <p>{e.name}</p>
                        <p>{e.phone}</p>
                        <p>{e.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Contact;