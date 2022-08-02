import React,{useEffect,useState} from 'react'

const Contact = () => {
    const [sticky, setSticky] = useState("");
    const [collapseClass,setCollapseClass] = useState("collapse navbar-collapse main-menu-item justify-content-center")
    const [ariaExpanded,setAriaExpanded] = useState(false)
    const handleToggle = () =>{
        if(ariaExpanded == false){
            setAriaExpanded(true)
            setCollapseClass("collapse navbar-collapse main-menu-item justify-content-center show")
        }else{
            setAriaExpanded(false)
            setCollapseClass("collapse navbar-collapse main-menu-item justify-content-center")
        }
    }
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
    <>
      <header className={classes}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/"> 
                        <img src="assets/img/my logo2.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded={ariaExpanded} aria-label="Toggle navigation" onClick={handleToggle}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={collapseClass}
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
                                    </a> </li>
                                <li className="nav-item">
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
    <section className="breadcrumb_part breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner">
                        <div className="breadcrumb_iner_item">
                            <h2>contact </h2>
                        </div>
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
                        <a href="/#" className="footer_logo"> <img src="assets/img/my logo2.png" alt="#"/> </a>
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
                      {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->} */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by 
<a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
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

export default Contact
