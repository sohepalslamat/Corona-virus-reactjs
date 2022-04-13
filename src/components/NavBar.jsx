import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={require("../assets/imgs/icon.png")} alt="" width="50" height="50" />
                        <span className='mx-1'> Coronavirus Stats <span className='text-danger'>(COVID-19)</span> </span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;