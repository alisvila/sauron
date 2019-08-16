import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'
import Card from '../card'
import nothing from '../../img/nothing.gif'

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
                                <div className="nothing-header">
                                    <h2>Nothing to see here</h2>
                                </div>
                                <div className="nothing">
                                    <img src={nothing} alt="" className=""/>
                                </div>
                                {/* <Card>
                                    <p>
                                        filan bisar asda asd asd 
                                    </p>
                                    <a href="/pannel/new" v-if="isNew" class="btn btn-finno btn-small confirm hidden">افزودن</a>
                                    <a click="deleteService" v-else class="btn btn-finno btn-small confirm hidden" >حذف شود؟</a>
                                </Card>
                                <Card>
                                    <p>
                                        filan bisar asda asd asd
                                    </p>
                                    <a href="/pannel/new" v-if="isNew" class="btn btn-finno btn-small confirm hidden">افزودن</a>
                                    <a click="deleteService" v-else class="btn btn-finno btn-small confirm hidden" >حذف شود؟</a>
                                </Card> */}
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
