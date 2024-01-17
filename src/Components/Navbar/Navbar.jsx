import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'


const Navbar = () => {
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Flashcard</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>FAQ</Link></li>
    </>
    return (
        <section>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
                <a className="btn btn-sm rounded-full text-white bg-gradient-to-b from-[#06286E] to-[#164EC0]">Login</a>
            </div>
            </div>
        </section>
    );
};

export default Navbar;