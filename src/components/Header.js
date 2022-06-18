// Kalian bisa menambahkan CSS di src/components/Header.css
import './Header.css';

import React from 'react';

const Header = () => {
    return (
        <div>
            <h1> Call a Friend</h1>
            <p>your Friendly contact app</p>
            <p className='red'>.................................................</p>
        </div>
    )
}

export default Header;