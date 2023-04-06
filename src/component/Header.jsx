import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='header-wrap'>
                    <span className='logo-wrap'>
                        <Link to='/'>DevCoop</Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;