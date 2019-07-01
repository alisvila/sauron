import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="login-wrapper">
                        <form className="form-signin">
                            <img className="mb-4 logo" src="https://sabinarya.com/wp-content/uploads/2019/04/Sabin_Tejarat-Aria-Vsmall.png" alt="" />
                            <label for="inputEmail" className="sr-only">آدرس ایمیل</label>
                            <input type="text" id="inputEmail" className="form-control" placeholder="آدرس ایمیل" required autofocus />
                            <label for="inputPassword" className="sr-only">روز عبور</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="روز عبور" required />
                            <div className="checkbox mb-3">
                                <label>
                                <input type="checkbox" value="remember-me" /> مرا به خاطر بسپار
                                </label>
                            </div>
                            <a className="btn btn-lg btn-block btn-finno" onclick="login()" >ورود</a>
                            <p className="error" id="error"></p> 
                        </form>
                    </div>
                </div>

                <div className="power">
                    <span>with <img className="heart" src="https://static.djangoproject.com/img/small-fundraising-heart.d255f6e934e5.png" /> by </span>
                    <img src="http://filan.sabinarya.com/images/favicon.jpeg" />
                </div>
            </div>
        )
    }
}
