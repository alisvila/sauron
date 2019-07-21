import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'
import Card from '../card'

import './pannel.css'
import { from } from 'rxjs';

export default class PannelHome extends Component {
    render() {
        return (
            <>
                <TopMenu />
                <div className="body-wrapper">
                        <div className="pannel-body">
                            <div className="flex-row">
                                <Card>filan bisar asda asd asd </Card>
                                <Card>filan bisar asda asd asd </Card>
                            </div>
                        </div>
                        <div className="pannel-menu">
                            <SideMenu />
                        </div>
                </div>
            </>
        )
    }
}
