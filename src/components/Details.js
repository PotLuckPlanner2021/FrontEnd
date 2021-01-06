import React from 'react'
import { Link } from "react-router-dom";
import Logo from './Logo';

const Details = () => {

    
    return (
        <div>
            <nav>
                <Logo />
                <div className="links">
                    <Link to="Logout" className="link">
                        Log Out
                    </Link>
                    <Link to="AddNew" className="link">
                        Add New
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Details;
