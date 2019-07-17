import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'

import './pannel.css'

export default class PannelHome extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <SideMenu />
            </div>
        )
    }
}
