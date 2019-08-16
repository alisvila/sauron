import React from 'react'

export default function TopMenu() {

    return (
        <div>
            <nav className="navbar navbar-default fixed-top rtl">
                <div className="navbar-header col-xs-5">
                    <span className="navbar-brand">KHARESH</span>
                </div>
                <ul className="nav pull-right messages">

                </ul>
                <ul className="nav top-nav">
                    <ul className="nav navbar-nav pull-right signout">
                        <a href="/" className="top-link" click="logout">خــروج</a>
                    </ul>

                </ul>
                <div className="notification alert hidden" role="alert">
                </div>
            </nav>
        </div>
    )
}
