import React, { Component } from 'react'
import SideMenu from './Sidemenu'
import TopMenu from './TopMenu'

export default class User extends Component {
    render() {
        return (
            <>
            <TopMenu />
            <div className="body-wrapper">
                <div className="pannel-body">
                    <div class="d-flex card wrapper">
                    <div class="client panel panel-default text-center approved" data="ffilan" status="approved">
                        <div class="panel-heading">
                            <h6>Edit Profile</h6>
                        </div>
                        <div className="card-body">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity"/>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">ثبت</button>
                            </form>
                            </div>
                        </div>
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
