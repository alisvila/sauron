import React, { Component } from 'react'
import Navbar from './navbar'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <img className="img-fluid" src="/img/main-banner.jpg" />
                    <div className="banner-text-wrapper">
                        <div className="row">
                            <span className="banner-text">
                                some text
                            </span>
                        </div>
                        <div className="row">
                            <a className="btn btn-primary">click</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="sec-colom">
                            <div className="col-md-12">
                                <img className="hero-logo" src="https://www.google.com/recaptcha/intro/images/hero-recaptcha-invisible.gif" />
                            </div>
                            <div className="col-md-12">
                                <h2>Introducing naKhanaa v1</h2>
                            </div>
                            <div className="col-md-12">
                                <p>
                                We are excited to introduce reCAPTCHA v3, which helps you detect abusive traffic on your website without any user friction. It returns a score based on the interactions with your website and provides you more flexibility to take appropriate actions. See blog for more details.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="sec-colom">
                            <div className="col-md-12">
                                <h1 className="header-question">What is reCAPTCHA?</h1>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    reCAPTCHA is a free service that protects your website from spam and abuse. reCAPTCHA uses an advanced risk analysis engine
                                    and adaptive challenges to keep automated software from engaging in abusive activities on your site. It does this while letting
                                    your valid users pass through with ease.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row banner-extension">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2>تبلیغ‌دهنده </h2>
                                    <p>
                                    تبلیغات موبایلی از طریق امکانات هدفمندی، بیش از هر روش تبلیغاتی دیگر، قادر است شما را به مشتریان بالقوه نزدیک کند. همچنین با ارائه آمار و ارقام دقیق شما را در تجزیه و تحلیل مسیر بازاریابی کمک خواهد کرد.
                                    </p>
                                    <a href="/advertisers/intro/" className="more-btn hover-pulse-animate"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>بیشتر بدانید</a>
                                </div>
                                <div className="col-lg-6">
                                    <h2>نمایش‌دهنده </h2>
                                    <p>
                                    عدد نماینده رسمی تبلیغات در اپلیکیشن‌های منتشر شده در کافه بازار می باشد. برای عدد حفظ رضایت کاربر از اپلیکیشن شما یک اولویت است. شما می‌توانید به راحتی با پیاده سازی کلاینت عدد و نمایش تبلیغات در اپلیکیشن خود، به ازای کلیک کاربران، درآمد کسب کنید.
                                    </p>
                                    <a href="/publishers/intro/" className="more-btn hover-pulse-animate"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>بیشتر بدانید</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features row justify-content-center">
                        <div className="col-md-3 services-wrap fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <a href="http://card.sabinarya.com/">
                                <div className="feature-wrap">
                                    <div className="center-text">
                                        <p>filan</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <a href="https://finnoboom.com/">
                                <div className="feature-wrap">
                                    <div className="center-text">
                                        <p>filan</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <a href="http://aryapay24.com/">
                                <div className="feature-wrap">
                                    <div className="center-text">
                                        <p>filan</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="icons" alt="" src="images/icon-advanced.png" />
                                <h2>
                                    Advanced Security
                                </h2>
                                <p>
                                    State of the art spam &amp; abuse protection for your website
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img className="icons" alt="" src="images/icon-ease.png" />
                                <h2>
                                    Ease of Use
                                </h2>
                                <p>
                                    Low friction, effortless interaction for your users
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img className="icons" alt="" src="images/icon-creation.png" />
                                <h2>
                                    Creation of Value
                                </h2>
                                <p>
                                    Apply the human bandwidth to benefit people everywhere
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}   
