import React from 'react'
import { Link } from 'react-router-dom'

export default function SideMenu() {
    const year = () => {
            let d = new Date()
            return(d.getFullYear());
    }
    return (
        <div className="sidebar-nav">
            <nav className="navbar navbar-default flex-column" role="navigation">
                <ul className="nav navbar-nav dir-rtl side-navbar d-none d-sm-block">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src="assets/finnoboom.png" />

                    </a>
                    <p></p>
                    <li className="active">
                    <Link to="/pannel/" className="nav-link">
                            <i class="fa fa-dashboard"></i>Pannel
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/pannel/upload" className="nav-link">
                            <i class="fa fa-dashboard"></i>upload
                    </Link>
                        <ul>
                            <li>
                            </li><li>
                            </li><li>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                    <Link to="/user/" className="nav-link">
                            <i class="fa fa-dashboard"></i>Users
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/pannel/demo" className="nav-link">
                            <i class="fa fa-dashboard"></i>Demo
                        </Link>
                    </li>
                </ul>


                <ul className="nav navbar-nav dir-rtl side-navbar d-block d-sm-none">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src="assets/finno.png" />
                    </a>
                    <p></p>
                    <li className="">
                        فیلان
                    </li>
                    <li className="">

                        <ul>
                            <li>
                            </li><li>
                            </li><li>
                            </li>
                        </ul>
                    </li>
                    <li className="">

                    </li>
                </ul>


                <p className="copyright">copyright {year()}</p>
            </nav>
        </div>
    )
}
