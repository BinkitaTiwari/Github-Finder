import React from 'react';
import PropTypes from 'prop-types';
const Navbar=(props)=>{

   return(
        <nav className="navbar bg-primary">
            <h1>
                <i className="fab fa-github" />
                   &nbsp;
                 {props.title}

            </h1>
            
        </nav>

    );
}

Navbar.propTypes={
    title:PropTypes.string.isRequired
}

export default Navbar;