import React, { useEffect, useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "./header.css"

function MainPage  ()  {
    const [sticky, setSticky] = useState("");
    //  const [showMenu, setShowMenu] = useState(false)

    // on render, set listener
    useEffect(() => {
      console.log("hii");
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }, []);
  
    const isSticky = () => {
      /* Method that will fix header after a specific scrollable */
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 100 ? " menu_fixed animated fadeInDown" : "";
      setSticky(stickyClass);
      console.log(stickyClass);
    };
  
    const classes = `main_menu home_menu ${sticky}`;
  
    return(
        <>
         <header className={classes}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/#"> <img src="logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-center "
                                 id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item active">
                                    
                                    <a className="nav-link" href="/">Home</a> 
                                </li>
                                <li className="nav-item">
                              <a className="nav-link" href="/about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/doctor">Doctors</a>
                                </li>

                                <li className="nav-item ">
                                    <a className="nav-link " href="/service">Services</a>
                                    </li>
                                <li className="nav-item ">
                                    <a className="nav-link " href="/blog" >
                                        Blog
                                    </a>
                                     </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <a className="btn_2 d-none d-lg-block" href="/#">HOT LINE- 09856</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-xl-5">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h5>We are here for your care</h5>
                            <h1>Best Care &
                                Better Doctor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus cmodo viverra </p>
                            <a href="/#" className="btn_2">Make an appointment</a>

                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner_img">
                        <img src="assets/img/banner_img.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about_us padding_top">
    <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6">
                    <div className="about_us_img">
                        <img src="assets/img/top_service.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                            maecenas accumsan lacus vel</p>
                        <a className="btn_2 " href="/#">learn more</a>
                        <div className="banner_item">
                            <div className="single_item">
                                <img src="assets/img/icon/banner_1.svg" alt=""/>
                                <h5>Emergency</h5>
                            </div>
                            <div className="single_item">
                                <img src="assets/img/icon/banner_2.svg" alt=""/>
                                <h5>Appointment</h5>
                            </div>
                            <div className="single_item">
                                <img src="assets/img/icon/banner_3.svg" alt=""/>
                                <h5>Qualfied</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="feature_part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="section_tittle text-center">
                        <h2>Our services</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_1.svg" alt=""/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_2.svg" alt=""/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                        <div className="single_feature_img">
                            <img src="assets/img/service.png" alt=""/>
                        </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_1.svg" alt=""/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="assets/img/icon/feature_2.svg" alt=""/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="our_depertment section_padding">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-xl-12">
                    <div className="depertment_content">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <h2>Our Depertment</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_our_depertment">
                                            <span className="our_depertment_icon">
                                                <img src="assets/img/icon/feature_2.svg" alt=""/></span>
                                            <h4>Better Future</h4>
                                            <p>Darkness multiply rule Which from without life creature blessed
                                                give moveth moveth seas make day which divided our have.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_our_depertment">
                                            <span className="our_depertment_icon">
                                                <img src="assets/img/icon/feature_2.svg"
                                                    alt=""/></span>
                                            <h4>Better Future</h4>
                                            <p>Darkness multiply rule Which from without life creature blessed
                                                give moveth moveth seas make day which divided our have.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_our_depertment">
                                            <span className="our_depertment_icon">
                                                <img src="assets/img/icon/feature_2.svg"
                                                    alt=""/></span>
                                            <h4>Better Future</h4>
                                            <p>Darkness multiply rule Which from without life creature blessed
                                                give moveth moveth seas make day which divided our have.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_our_depertment">
                                            <span className="our_depertment_icon">
                                                <img src="assets/img/icon/feature_2.svg"
                                                    alt=""/></span>
                                            <h4>Better Future</h4>
                                            <p>Darkness multiply rule Which from without life creature blessed
                                                give moveth moveth seas make day which divided our have.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="doctor_part section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="section_tittle text-center">
                        <h2> Experienced Doctors</h2>
                        <p>Face replenish sea good winged bearing years air divide wasHave night male also</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src="assets/img/doctor/doctor_1.png" alt="doctor"/>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="/#"> <i className="ti-facebook"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-twitter-alt"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-instagram"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-skype"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single_text">
                            <div className="single_blog_text">
                                <h3>DR Adam Billiard</h3>
                                <p>Heart specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src="assets/img/doctor/doctor_4.png" alt="doctor"/>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="/#"> <i className="ti-facebook"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-twitter-alt"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-instagram"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-skype"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single_text">
                            <div className="single_blog_text">
                                <h3>DR Adam Billiard</h3>
                                <p>Medicine specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src="assets/img/doctor/doctor_2.png" alt="doctor"/>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="/#"> <i className="ti-facebook"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-twitter-alt"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-instagram"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-skype"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single_text">
                            <div className="single_blog_text">
                                <h3>DR Fred Macyard</h3>
                                <p>CHeart specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src="assets/img/doctor/doctor_3.png" alt="doctor"/>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="/#"> <i className="ti-facebook"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-twitter-alt"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-instagram"></i> </a></li>
                                    <li><a href="/#"> <i className="ti-skype"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single_text">
                            <div className="single_blog_text">
                                <h3>DR Justin Stuard</h3>
                                <p>Heart specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="regervation_part section_padding">
        <div className="container">
            <div className="row align-items-center regervation_content">
                <div className="col-lg-7">
                    <div className="regervation_part_iner">
                        <form>
                            <h2>Make an Appointment</h2>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="password" className="form-control" id="inputPassword4"
                                        placeholder="Email address"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select">
                                        <option value="1" selected>Select service</option>
                                        <option value="2">Name of service</option>
                                        <option value="3">Name of service</option>
                                        <option value="4">Name of service</option>
                                        <option value="5">Name of service</option>
                                    </select>
                                </div>
                                <div className="form-group time_icon col-md-6">
                                    <select class="form-control" id="Select2">
                                        <option value="" selected>Time</option>
                                        <option value="1">8 AM TO 10AM</option>
                                        <option value="1">10 AM TO 12PM</option>
                                        <option value="1">12PM TO 2PM</option>
                                        <option value="1">2PM TO 4PM</option>
                                        <option value="1">4PM TO 6PM</option>
                                        <option value="1">6PM TO 8PM</option>
                                        <option value="1">4PM TO 10PM</option>
                                        <option value="1">10PM TO 12PM</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" id="Textarea" rows="4"
                                        placeholder="Your Note "></textarea>
                                </div>
                            </div>
                            <div className="regerv_btn">
                                <a href="/#" className="btn_2">Make an Appointment</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="reservation_img">
                        <img src="assets/img/reservation.png" alt="" className="reservation_img_iner"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <footer className="footer-area">
        <div className="footer section_padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
                        <a href="/#" className="footer_logo">
                             <img src="assets/img/logo.png" alt="#"/> </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <div className="social_logo">
                            <a href="/#"><i className="ti-facebook"></i></a>
                            <a href="/#"> <i className="ti-twitter"></i> </a>
                            <a href="/#"><i className="ti-instagram"></i></a>
                            <a href="/#"><i className="ti-skype"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/#">About us</a></li>
                            <li><a href="/#">Department</a></li>
                            <li><a href="/#"> Online payment</a></li>
                            <li><a href="/#">Careers</a></li>
                            <li><a href="/#">Department</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="/#">In the community</a></li>
                            <li><a href="/#">IU health foundation</a></li>
                            <li><a href="/#">Family support </a></li>
                            <li><a href="/#">Business solution</a></li>
                            <li><a href="/#">Community clinic</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-6 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/#">Lights were season</a></li>
                            <li><a href="/#"> Their is let wherein</a></li>
                            <li><a href="/#">which given over</a></li>
                            <li><a href="/#">Without given She</a></li>
                            <li><a href="/#">Isn two signs think</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-6 single-footer-widget">
                        <h4>Newsletter</h4>
                        <p>Seed good winged wherein which night multiply
                            midst does not fruitful</p>
                        <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" className="form-inline">
                                <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
                                    required="" type="email"/>
                                <button className="click-btn btn btn-default text-uppercase"> <i className="ti-angle-right"></i>
                                </button>
                                <div style={{position: "absolute", left: "-5000px"}}>
                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                        type="text"/>
                                </div>

                                <div className="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

       <div className="copyright_part">
            <div className="container">
                <div className="row align-items-center">
                    <p className="footer-text m-0 col-lg-8 col-md-12">
                     Copyright &copy;
                    <script>document.write(new Date().getFullYear());
                    </script>
                     All rights reserved | This template is made with 
                <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>

</p>
                    <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                        <a href="/#"><i className="ti-facebook"></i></a>
                        <a href="/#"> <i className="ti-twitter"></i> </a>
                        <a href="/#"><i className="ti-instagram"></i></a>
                        <a href="/#"><i className="ti-skype"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer> 

        </>
    )
}
export default MainPage