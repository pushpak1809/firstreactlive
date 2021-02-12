import react from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (

        <>
            <div className='container-fluid nav bg'>
                <div className="row">
                    <div className="col-10 mx-auto"  >



                        <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink  className="navbar-brand" to="/">Lorem</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <NavLink  activeClassName='menu_active' className="nav-link" aria-current="page" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" aria-current="page" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Navbar;