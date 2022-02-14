import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './UserInfo.css';
import ChangePassword from './ChangePassword';

const UserInfo = (props) => {

    const { formUser, setformUser } = props;
    const history = useHistory();
    const [widthClick, setwidthClick] = useState(true);

    const ChangeWidth = () => {
        setwidthClick(!widthClick);
    }

    const handleLogout = () => {
        localStorage.clear();
        setformUser(null);
        history.push('/sign-in')
    }

    let styleWidth = {
        width: "56px"
    }

    if (widthClick) {
        styleWidth = {
            with: "56px + 112vh"
        }
    }

    return (
        <div className="body__User">
            <div className="l-navbar" id="navbar" style={styleWidth}>
                <nav className="nav">
                    <div>
                        <a href="#" className="nav__logo">
                            <img src="/img/profile.png" width="30" height="30" className="nav__logo-icon" alt="" />
                            <span className="nav__logo-text">{formUser.username}</span>
                        </a>

                        {widthClick === true &&
                            <div className="nav__toggle" id="nav-toggle">
                                <i className="fas fa-chevron-left" onClick={ChangeWidth}></i>
                            </div>
                        }

                        {widthClick === false &&
                            <div className="nav__toggle" id="nav-toggle">
                                <i className="fas fa-chevron-right" onClick={ChangeWidth}></i>
                            </div>
                        }

                        <ul className="nav__list">
                            <Link to="/" className="nav__link active__link">
                                <i className="fas fa-th nav__icon"></i>
                                <span className="nav__text"> Home </span>
                            </Link>

                            <Link to="/logistics-explorer" className="nav__link active__link">
                                <i className="fas fa-boxes nav__icon"></i>
                                <span className="nav__text"> Logistics Explorer </span>
                            </Link>

                            <Link to="/user-info" className="nav__link active__link">
                                <i className="fas fa-user nav__icon"></i>
                                <span className="nav__text"> Profile User </span>
                            </Link>
                        </ul>
                    </div>
                    <Link className="nav__link active__link" to="/sign-in" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt nav__icon"></i>
                        <span className="nav__text"> Logout </span>
                    </Link>
                </nav>
            </div>

            <div className="card text-center profile">
                <div className="card-body">
                    <img src="/img/profile.png" width="100" height="100" className="nav__logo-icon" alt="" />
                    <br /><br />
                    <p className="card-text font-weight-bold h2">{formUser.username}</p>
                </div>
            </div>

            <div className="card text-center profile">
                <div className="card-body">
                    <p className="text-left font-weight-bold h4">Profile Information</p>
                    <br /><br />
                    <p className="text-left font-weight-bold h5 text-secondary">E-mail adress
                       <span className="text-dark" style={{ fontWeight: "normal", marginLeft: "25%" }}>{formUser.email}</span>
                    </p>
                    <p className="text-left font-weight-bold h5 text-secondary">First Name
                       <span className="text-dark" style={{ fontWeight: "normal", marginLeft: "25.3%" }}>&nbsp; &nbsp; {formUser.firstname}</span>
                    </p>
                    <p className="text-left font-weight-bold h5 text-secondary">Last Name
                       <span className="text-dark" style={{ fontWeight: "normal", marginLeft: "25.8%" }}>&nbsp; &nbsp;{formUser.lastname}</span>
                    </p>
                    <p className="text-left font-weight-bold h5 text-secondary">Phone Number
                       <span className="text-dark" style={{ fontWeight: "normal", marginLeft: "23.5%" }}>{formUser.phonenumber}</span>
                    </p>
                    <p className="text-left font-weight-bold h5 text-secondary">Profile Id
                       <span className="text-dark" style={{ fontWeight: "normal", marginLeft: "29.2%" }}>{formUser.userId}</span>
                    </p>
                </div>
            </div>

            <div className="card text-center profile">
                <ChangePassword />
            </div>

            <br />
        </div>
    );
}

export default UserInfo;