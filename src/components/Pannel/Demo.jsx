import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'
import Card from '../card'
import Agent from '../../service/api'

export default class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            captcha: "",
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value})
    }

    submitCaptcha = () => {
        console.log('aa')
        Agent.Kharesh.check(this.state.captcha);
    }

    beKharesh = (src) => {
        return(<img src={src}></img>)
    }

    refresh = () => {
        console.log(this.beKharesh)
        let url="//192.168.200.98:8000/known/"
        Agent.Kharesh.get(url, this.beKharesh);
    }
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
                                        <input type="text"
                                            name="captcha"
                                            id="inputEmail"
                                            className="form-control"
                                            value={this.state.captcha}
                                            onChange={this.handleChange}
                                            placeholder="آدرس ایمیل"
                                            required
                                            autofocus
                                        />
                                        </form>
                                        <a className="btn btn-lg btn-block btn-finno" onClick={this.submitCaptcha}>ثبت</a>
                                        <a click="deleteService" v-else className="btn btn-finno btn-small confirm hidden" onClick={this.refresh}>دوباره</a>
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
