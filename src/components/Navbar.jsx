import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthCotext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthCotext);
    const navlings = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user &&
            <ul className='flex'>
                <li><NavLink to='/updateprofile'>Update Profile </NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>

            </ul>
        }
        <li><NavLink to='/register'>Register</NavLink></li>

    </>

    const handleSignOut = () => {
        logOut()
            .then(() => console.log("singOut success"))
            .catch(error => {
                console.log(error);
            })
    }
    // console.log(user.displayName);
    return (
        <div className=''>
            <div className="navbar top-0  md:p-1 lg:p-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlings}
                        </ul>
                    </div>
                    <a className=" text-2xl font-bold">TechForge Industries</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        {navlings}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex items-center gap-2'>
                            <div className="tooltip  tooltip-left" data-tip={user.displayName}>
                                <div><img src={user.photoURL
                                } className='w-10 h-10 rounded-full' alt="" /></div>
                            </div>

                            <a onClick={handleSignOut} className="btn btn-sm">Sign Out</a></div>
                            :
                            <Link to='/login'>
                                <button className='btn btn-sm'>Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;