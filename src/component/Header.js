import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='header-wrap'>
                    <span className='logo-wrap'>
                        <Router>
                            <Link to='/'>DevCoop</Link>
                        </Router>
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;