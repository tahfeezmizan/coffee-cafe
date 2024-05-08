import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../UseAuth/UseAuth';

const Navbar = () => {
    const { user, logOutUser, } = UseAuth();

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {user ?
            <>
                <li><NavLink to="/addcoffee">Add Coffee</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li>
                    <button onClick={() => {
                        logOutUser()
                    }
                    } >LogOut</button>
                </li>
            </>
            :
            <>
                <li><NavLink to="/singin">Sing In</NavLink></li>
                <li><NavLink to="/singup">Sing Up</NavLink></li>
            </>
        }
    </>

    return (
        <div className="" >
            <div className="w-full md:w-9/12 mx-auto py-3">
                <div className="flex justify-between items-center">
                    <Link to='/' className='text-xl'>Coffee Cafe</Link>
                    <div className="flex list-none gap-5">
                        {links}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;