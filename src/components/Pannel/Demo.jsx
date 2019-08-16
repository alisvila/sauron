import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'
import Card from '../card'
import Agent from '../../service/api'

export default class Demo extends Component {
    render() {
        return (
            <>
                <TopMenu />
                <div className="body-wrapper">
                        <div className="pannel-body">
                            <div className="flex-row">
                                <Card>
                                    <div className="kharesh">
                                        <img src=""></img>
                                        <form>
                                            <input type="text"></input>
                                        </form>
                                        <a href="/pannel/new" v-if="isNew" className="btn btn-finno btn-small confirm hidden" onClick={this.clicked}>ثبت</a>
                                        <a click="deleteService" v-else className="btn btn-finno btn-small confirm hidden" >دوباره</a>
                                    </div>
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
