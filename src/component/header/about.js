import React,{useEffect,useState} from 'react'

const About = () => {
    const [sticky, setSticky] = useState("");

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
    const classes=`main_menu ${sticky}`
   
  return (
    < >
    
    <header className={classes}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html"> 
                        <img src="assets/img/logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-center"
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
                                    <a className="nav-link " href=" /service">
                                        Services
                                    </a>
                                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="services.html">services</a>
                                        <a className="dropdown-item" href="dep.html">depertments</a>
                                        <a className="dropdown-item" href="elements.html">Elements</a>
                                    </div> */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/blog" >
                                        Blog
                                    </a>
                                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                        <a className="dropdown-item" href="blog.html">blog</a>
                                        <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                    </div> */}
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
    {/* <!-- Header part end-->*/}

    {/* <!-- breadcrumb start--> */}
    <section className="breadcrumb_part breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner">
                        <div className="breadcrumb_iner_item">
                            <h2>about us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- breadcrumb start--> */}

    {/* <!-- about us part start--> */}
    <section className="about_us single_about_padding">
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
    {/* <!-- about us part end--> */}

    {/* <!-- our depertment part start--> */}
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
    {/* <!-- our depertment part end--> */}

    {/* <!-- footer part start--> */}
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
                                <div style={{position: "absolute" ,left: "-5000px"}}>
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

        <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                        <a href="/#"><i className="ti-facebook"></i></a>
                        <a href="/#"> <i className="ti-twitter"></i> </a>
                        <a href="/#"><i className="ti-instagram"></i></a>
                        <a href="/#"><i className="ti-skype"></i></a>
                    </div>
                <div/>
            <div/>
        <div/>
    </footer> 
    </>

  )
}

export default About
