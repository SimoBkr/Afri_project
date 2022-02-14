import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({ formUser, setformUser }) => {

    const history = useHistory();
    let buttons;

    const handleLogout = () => {
        localStorage.clear();
        setformUser(null);
        history.push('/sign-in')
    }

    if (localStorage.getItem('access_token')) {
        buttons = (
            <ul className="navbar-nav ml-auto">
                    <a class="navbar-brand">
                    <img src="/img/profile.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                    &nbsp; {formUser.username} 
                    </a>
                    <li className="nav-item buttonLogin">
                        <Link className="nav-link" to="/sign-in" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
            </ul>
        )
    } else {
                    buttons = (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item buttonLogin">
                                <Link className="nav-link " to="/sign-in">SignIn</Link>
                            </li>
                            <li className="nav-item buttonLogin">
                                <Link className="nav-link " to="/sign-up">SignUp</Link>
                            </li>
                        </ul>
                    )
                }
    return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" aria-disabled="true">TIP Project</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item buttonLogin">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item buttonLogin">
                                        <Link className="nav-link active" aria-current="page" to="/logistics-explorer">Logistics Explorer</Link>
                                    </li>
                                    <li className="nav-item buttonLogin">
                                        <Link className="nav-link active" aria-current="page" to="/container-tracking">Container Tracking</Link>
                                    </li>
                                    <li className="nav-item buttonLogin">
                                        <Link className="nav-link active" aria-current="page" to="/distance-and-time">Distance - Time</Link>
                                    </li>
                                    <li className="nav-item buttonLogin">
                                        <Link className="nav-link active" aria-current="page" to="/ship-schedules">Ship Schedules</Link>
                                    </li>
                                </ul>
                                {buttons}
                            </div>
                        </div>
                    </nav>
                </div>
    )
}

export default Navbar
