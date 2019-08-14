import React, { Component } from 'react'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid back-color">
                    <div class="row banner">
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
                    </div>


                    <div className="row banner-extension section">
                        <div className="container box-shadow avalin-section">
                            <div className="row">
                                <div className="col-lg-4 pillar solo-pillar">
                                    <h2>لورم ایپسوم امه و مجله در ستون </h2>
                                    <p> برای شرایط فعلی تکنولوژی مورد نیاز و  است و برای شرایط فعلی تکنولوژی مورد نیاز و کا  است و برای شرایط فعلی تکنولوژی مورد نیاز و کا کاربردهای متنوع با هدف</p>
                                    <a href="/advertisers/intro/" className="btn-finno more-btn hover-pulse-animate"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>بیشتر بدانید</a>
                                </div>
                                <div className="col-lg-4 pillar">
                                    <img className="sh-image-l" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/benifits-1.png" alt="benifits-1" />
                                    <h2>لورم ایپسوم </h2>
                                    <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف                                    </p>
                                </div>
                                <div className="col-lg-4 pillar">
                                    <img className="sh-image-l" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/benifits-2.png" alt="benifits-2" />
                                    <h2>لورم ایپسوم </h2>
                                    <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features row justify-content-center section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 services-wrap fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                                        <div className="feature-wrap  box-shadow pillar">
                                            <div className="center-text content">
                                                <h3>لورم ایپسوم</h3>
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است برای شرایط فعلی تکنولوژی برای تکنولوژی مورد</p>
                                            </div>
                                            <img class="sh-image-url" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/03/insurance.jpg" alt="insurance" />
                                        </div>
                                </div>
                                <div className="col-md-4" data-wow-duration="1000ms" data-wow-delay="600ms">
                                        <div className="feature-wrap box-shadow pillar">
                                            <div className="center-text content">
                                                <h3>فعلی تکنولوژی</h3>
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است برای شرایط فعلی تکنولوژی مورد</p>
                                            </div>
                                                <img class="sh-image-url" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/we-offer-2-1.png" alt="we-offer-2-1" />
                                        </div>
                                </div>
                                <div className="col-md-4" data-wow-duration="1000ms" data-wow-delay="600ms">
                                        <div className="feature-wrap box-shadow pillar">
                                            <div className="center-text content">
                                                <h3> طراحان گرافیک</h3>
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است برای شرایط فعلی تکنولوژی مورد</p>
                                            </div>
                                                <img class="sh-image-url" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/03/undraw_folder_39kl.jpg" alt="undraw_folder_39kl" />
                                        </div>
                                </div>                           
                            </div>
                        </div>
                    </div>

                    <div className="row section change-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 sep">
                                <img className="" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/driven-to-deliver.png" alt="driven-to-deliver" />
                            </div>
                            <div className="col-md-5 sep">
                                <h2>لورم ایپسوم متن ساختگی</h2>
                                <span className="sub-header text-primary-color">لورم ایپسوم متن ساختگی</span>
                                <div className="short-row">
                                <h3> سادگی نامفهوم</h3>
                                <p>لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی</p>
                                </div>
                                <div className="short-row">
                                <h3>گرافیک</h3>
                                <p>لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی</p>
                                </div>
                                <div className="short-row">
                                <h3>لورم ایپسوم</h3>
                                <p>لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>

                    {/* jombo */}
                    <div className="row section background-image jombo">
                        <div className="container">
                            <div className="row align-self-center">
                                <div className="col-md-12">
                                    <h2>Subscribe to our newsletter</h2>
                                    <p>You will receive newest information about our projects, investments</p>
                                    <p>partners and other important information.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* news */}

                    <div className="row banner-extension section news-section">
                        <div class="container">
                            <div className="row">
                                <div className="col-md-12 news-section-header">
                                    <h2>اخبار</h2>
                                </div>
                            </div>
                        </div>
                        <div className="container box-shadow">
                            <div className="row">
                                <div className="col-md-12 pillar solo-pillar">
                                    <h2>لورم ایپسوم امه و مجله در ستون </h2>
                                    <p> برای شرایط فعلی تکنولوژی مورد نیاز و  است و برای شرایط فعلی تکنولوژی مورد نیاز و کا  است و برای شرایط فعلی تکنولوژی مورد نیاز و کا کاربردهای متنوع با هدف</p>
                                    <a href="/advertisers/intro/" className="btn-finno more-btn hover-pulse-animate"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>بیشتر بدانید</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 pillar">
                                    <img className="sh-image-l" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/benifits-1.png" alt="benifits-1" />
                                    <h2>لورم ایپسوم </h2>
                                    <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 pillar">
                                    <img className="sh-image-l" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/benifits-2.png" alt="benifits-2" />
                                    <h2>لورم ایپسوم </h2>
                                    <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <footer className="row">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-3 footer-pillar">
                                <h4>filan</h4>
                                <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Streed address 15, City</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">+321 97654387</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">emailaddress@company.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 footer-pillar">
                                    <h4>filan</h4>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">FAQ</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Cookies</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 footer-pillar">
                                <h4>filan</h4>
                                <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Insurance</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Planning</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Consulting</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-3 footer-pillar">
                                <img class="logo-image" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/03/finances-logo.png" alt="finances-logo" />
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        )
    }
}   
