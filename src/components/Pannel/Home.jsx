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
                                <Card>
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
                                </Card>
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
