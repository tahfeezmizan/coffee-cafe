import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/addcoffee">Add Coffee</NavLink></li>
        <li><NavLink to="/updatecoffee">Update Coffee</NavLink></li>
    </>

    return (
        <div className="" >
            <div className="w-8/12 mx-auto py-3">
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