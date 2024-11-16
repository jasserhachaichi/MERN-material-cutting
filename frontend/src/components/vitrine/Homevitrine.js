import React, { useContext,useState, useEffect, useRef } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from './../../AuthContext';

import './fonts/icomoon/style.css';
import './fonts/flaticon/font/flaticon.css';
import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


import img1 from './images/graphs-statistics_outline-M.svg';
import img2 from './images/dashboard-M.jpg';
import img3 from './images/undraw_getting_coffee_re_f2do.svg';
import img4 from './images/i1.jpg';
import img5 from './images/i2.jpg';
import img6 from './images/i3.jpg';


function Homevitrine() {
  const { isAuthenticated} = useContext(AuthContext);


  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    btnRef1.current.style.display = 'none';
    btnRef2.current.style.display = 'block';
    try {
      const response = await axios.post('http://localhost:4000/form/sendemail', data, {withCredentials: true});
      Swal.fire('Success', response.data.message, 'success');
      reset(); 
    } catch (error) {
      Swal.fire('Error!', 'Error sending email', 'error');
    }
    btnRef2.current.style.display = 'none';
    btnRef1.current.style.display = 'block';
  };
  const [isActive, setIsActive] = useState(false);
  const [isSubActive, setIsSubActive] = useState(false);
  const [isSubSubActive, setIsSubSubActive] = useState(false);

  const cloneNavRef = useRef(null);
  const mobileMenuBodyRef = useRef(null);


  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleSubActive = () => {
    setIsSubActive(!isSubActive);
  };

  const toggleSubSubActive = () => {
    setIsSubSubActive(!isSubSubActive);
  };



  useEffect(() => {
    if (window.jQuery('.owl-single').length > 0) {
      var owl = window.jQuery('.owl-single').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 800,
        mouseDrag: false,
        touchDrag: false,
        items: 1,
        nav: false,
        navText: ['<span className="icon-keyboard_backspace"></span>', '<span className="icon-keyboard_backspace"></span>'],
        onChanged: changed,
      });

      function changed(event) {
        var i = event.item.index;
        if (i == 0 || i == null) {
          i = 1;
        } else {
          i = i - 1;

          window.jQuery('.js-custom-dots a').removeClass('active');
          window.jQuery('.js-custom-dots a[data-index="' + i + '"]').addClass('active');
        }
      }

      window.jQuery('.js-custom-dots a').each(function (i) {
        var i = i + 1;
        window.jQuery(this).attr('data-index', i);
      });

      window.jQuery('.js-custom-dots a').on('click', function (e) {
        e.preventDefault();
        owl.trigger('stop.owl.autoplay');
        var k = window.jQuery(this).data('index');
        k = k - 1;
        owl.trigger('to.owl.carousel', [k, 500]);
      })

    }

    window.jQuery(window).scroll(function () {
      var $w = window.jQuery(this),
        st = $w.scrollTop(),
        navbar = window.jQuery('.js-site-navbar'),
        sd = window.jQuery('.js-scroll-wrap'),
        toggle = window.jQuery('.site-menu-toggle');

      // if ( toggle.hasClass('open') ) {
      //   window.jQuery('.site-menu-toggle').trigger('click');
      // }


      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });

    /*           var navToggler = window.jQuery('.site-menu-toggle');
              window.jQuery("body").on("click", ".site-nav .site-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
             e.preventDefault();
             var hash = this.hash;
             
               window.jQuery('html, body').animate({
       
                 scrollTop: window.jQuery(hash).offset().top
               }, 400, 'easeInOutExpo', function(){
                 window.location.hash = hash;
               });
       
           });
           window.jQuery('#vitrinePart').on('activate.bs.scrollspy', function () {  }); */

    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
    });


  }, [])



  return (
    <>
      <div id="vitrinePart" data-spy="scroll" data-target=".site-navbar-target" data-offset="100" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0" className={isActive ? 'offcanvas-menu' : ''}>
        <div className="site-mobile-menu site-navbar-target" style={isActive ? { transform: "translateX(0%)", WebkitTransform: "translateX(0%)", msTransform: "translateX(0%)", } : {}}>
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className={`icofont-close js-menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu} ></span>
            </div>
          </div>
          <div className="site-mobile-menu-body" ref={mobileMenuBodyRef}>
              <ul className="site-nav-wrap">
                <li className="active"><a href="#home-section" className="nav-link active">Home</a></li>
                <li><a href="#features-section" className="nav-link">Features</a></li>
                <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                <li><a href="#about-section" className="nav-link">About</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>

{!isAuthenticated && (
                <ul className="site-nav-wrap">
                  <li className="cta-button-outline"><a href="/auth/signin">Sign in</a></li>
                  <li className="cta-primary"><a href="/auth/signup">Register</a></li>
              </ul>
            )}



          </div>
        </div>

        <nav className="site-nav dark js-site-navbar mb-5 site-navbar-target">
          <div className="container">
            <div className="site-navigation" ref={cloneNavRef}>
              <a href="/" className="logo m-0 float-left text-primary">CutMaster.</a>

              <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-left">
                <li className="active"><a href="#home-section" className="nav-link">Home</a></li>
                <li><a href="#features-section" className="nav-link">Features</a></li>
                <li><a href="#about-section" className="nav-link">About</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>

{!isAuthenticated &&(              <ul className="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
                <li className="cta-button-outline"><a href="/auth/signin">Sign in</a></li>
                <li className="cta-primary"><a href="/auth/signup">Register</a></li>
              </ul>)}

              <a href="#" className={`burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none ${isActive ? 'active' : ''}`} onClick={toggleMenu} data-toggle="collapse" data-target="#main-navbar">
                <span></span>
              </a>

            </div>
          </div>
        </nav>

        <div className="untree_co-hero pb-0" id="home-section">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <div className="dots"></div>
                <div className="row justify-content-center">
                  <div className="col-md-7 text-center mb-5">
                    <h1 className="heading" data-aos="fade-up" data-aos-delay="0">Intuitive online platform for custom cutting of materials <span className="d-block">Powered by <a href="#about-section">CutMaster</a></span></h1>
                  </div>
                </div>

                <div className="row flex-column flex-md-row  align-items-center">

                  <div className="col-lg-5 col-md-12">
                    <div className="intro">

                      <div className="excerpt" data-aos="fade-up" data-aos-delay="100">
                        <span className="caption">Welcome to CutMaster</span>
                        <h2 className="font-weight-bold">Explore The Platform</h2>
                        <p>Benefit from direct access to a wide range of materials, customizable according to your needs, for a fast and quality service.</p>
                      </div>
                      <p data-aos="fade-up" data-aos-delay="200">
                        <a href="/auth/signin" className="btn btn-primary smoothscroll mr-1 mb-2">Order Now!</a>
                        <a href="#features-section" className="btn btn-outline-primary smoothscroll mb-2">See Features</a>

                      </p>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <div className="illustration">
                      <img src={img1} alt="Image" className="img-fluid" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="untree_co-section">
          <div className="container">

            <div className="row mb-5">
              <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
                <span className="caption">Features</span>
                <h2 className="heading">key features that highlight the advantages of using our service</h2>
               
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="service horizontal d-flex">
                  <div className="service-icon color-1 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
                  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
                  </div>
                  <div className="service-contents">
                    <h3>Precision Cutting Technology</h3>
                    <p>Our advanced cutting tools ensure precise and accurate cuts, regardless of the material or shape, meeting even the most detailed design specifications.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="service horizontal d-flex">
                  <div className="service-icon color-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-layers-fill" viewBox="0 0 16 16">
                  <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882z"/>
                  <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0z"/>
                </svg>
                  </div>
                  <div className="service-contents">
                    <h3>Wide Selection of Materials</h3>
                    <p>With access to over 150 high-quality materials, customers can easily find the perfect option for their project, whether it’s wood, metal, acrylic, or composite materials.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="service horizontal d-flex">
                  <div className="service-icon color-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
                  </div>
                  <div className="service-contents">
                    <h3>Customizable Designs</h3>
                    <p>Users can submit their own plans or choose from predefined shapes and designs, offering complete flexibility in achieving the perfect product.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div className="service horizontal d-flex">
                  <div className="service-icon color-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
</svg>






                  </div>
                  <div className="service-contents">
                    <h3>Instant Cost Estimation</h3>
                    <p>Our online platform provides real-time cost estimates based on the material, size, and design choices, allowing customers to make informed decisions quickly.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="untree_co-section" id="features-section">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <span className="caption" data-aos="fade-up" data-aos-delay="0">Services</span>
                <h3 className="heading mb-4" data-aos="fade-up" data-aos-delay="100">A complete solution for your business.</h3>
                <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                  <ul className="list-unstyled ul-check primary">
                    <li>There live the blind texts</li>
                    <li>Far far away behind the word</li>
                  </ul>
                </div>
              </div>
              <div className="col-6" data-aos="fade-up" data-aos-delay="400">
                <a href="https://www.youtube.com/watch?v=3lLfXX9Xu-0" className="btn-video" data-fancybox>

                  <span className="wrap-icon-play">
                    <svg className="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </span>
                  <img src={img2} alt="Image" className="img-fluid img-shadow" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="untree_co-section bg-light">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 order-lg-2 js-custom-dots">

                <a href="#" className="service link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                  <div className="service-icon color-1 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
  <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
</svg>

                  </div>
                  <div className="service-contents">
                    <h3>Fast and Reliable Service</h3>
                    <p>Orders are processed and cut within a short timeframe, ensuring rapid delivery while maintaining the highest quality standards.</p>
                  </div>
                </a>

                <a href="#" className="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="100">
                  <div className="service-icon color-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg>
                  </div>
                  <div className="service-contents">
                    <h3>Expert Finishing Options</h3>
                    <p>Customers can customize finishes, edge treatments, and surface refinements, giving their product a professional look tailored to their exact needs.</p>
                  </div>
                </a>


                <a href="#" className="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="200">
                  <div className="service-icon color-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
                  </div>
                  <div className="service-contents">
                    <h3>Eco-friendly Materials and Practices</h3>
                    <p>We offer sustainable and eco-friendly materials, and our processes are designed to minimize waste, aligning with green practices for environmentally conscious customers.</p>
                  </div>
                </a>


              </div>
              <div className="col-lg-7">
                <div className="img-shadow">
                  <div className="owl-single no-dots owl-carousel">
                    <div className="item">
                      <span className="number">1/3</span>
                      <img src={img4} alt="Image" className="img-fluid" />
                    </div>
                    <div className="item">
                      <span className="number">2/3</span>
                      <img src={img5} alt="Image" className="img-fluid" />
                    </div>
                    <div className="item">
                      <span className="number">3/3</span>
                      <img src={img6} alt="Image" className="img-fluid" />
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="untree_co-section">
          <div className="container">

            <div className="row">
              <div className="col-12 mb-5" data-aos="fade-up">
                <span className="caption">Features</span>
                <h2 className="heading">More Features</h2>
              </div>

              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="0">
                <div className="service">
                  <div className="service-icon color-1 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
                  <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
                </svg>
                  </div>
                  <div className="service-contents">
                    <h3>Fast and Reliable Service</h3>
                    <p>Orders are processed and cut within a short timeframe, ensuring rapid delivery while maintaining the highest quality standards.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="service">
                  <div className="service-icon color-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                </svg>
                  </div>
                  <div className="service-contents">
                    <h3>Expert Finishing Options</h3>
                    <p>Customers can customize finishes, edge treatments, and surface refinements, giving their product a professional look tailored to their exact needs.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="service">
                  <div className="service-icon color-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
                </svg>
                  </div>
                  <div className="service-contents">
                    <h3>Eco-friendly Materials and Practices</h3>
                    <p>We offer sustainable and eco-friendly materials, and our processes are designed to minimize waste, aligning with green practices for environmentally conscious customers.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <div className="service">
                  <div className="service-icon color-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"  fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
  <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
</svg>
                  </div>
                  <div className="service-contents">
                    <h3>Convenient Online Experience</h3>
                    <p>The entire process, from selecting materials to placing an order, is handled seamlessly through our user-friendly online platform, available anytime and from anywhere.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="untree_co-section" id="about-section">
          <div className="container">
            <div className="row justify-content-between mb-5">
              <div className="col-lg-8 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <img src={img3} alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-4">
                <div className="mb-4" data-aos="fade-up" data-aos-delay="0">
                  <span className="caption">About</span>
                  <h2 className="heading">The Company</h2>
                </div>
                <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
                  <p>CutMaster is an innovative web-based platform specializing in the custom cutting of materials. Our mission is to make high-quality materials accessible to everyone, from DIY enthusiasts to professional craftsmen, by offering precise, tailor-made cutting services online. With a vast selection of over 150 materials and customizable options, we provide solutions for projects of all sizes, ensuring the perfect cut every time.</p>
                </div>

                <ul className="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="200">
                  <li>There live the blind texts</li>
                  <li>Far far away behind the word</li>
                  <li>Their place and supplies</li>
                </ul>


                <div className="row count-numbers">
                  <div className="col-6 col-lg-6" data-aos="fade-up" data-aos-delay="0">
                    <span className="counter d-block"><span data-number="24">+1</span><span>M</span></span>
                    <span className="caption-2">Members</span>
                  </div>
                  <div className="col-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <span className="counter d-block"><span data-number="121">121</span><span></span></span>
                    <span className="caption-2">Team</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="untree_co-section" id="contact-section">
          <div className="container">
            <div className="row mb-5" data-aos="fade-up" data-aos-delay="0">
              <div className="col-12 text-center">
                <span className="caption">Contact</span>
                <h2 className="heading">Get In Touch</h2>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-7">


                <form className="contact-form" data-aos="fade-up" data-aos-delay="100" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="" htmlFor="fname">First name</label>
                        <input type="text" className="form-control" id="fname" {...register('fname', { required: true })}/>
                        {errors.fname && <span className='text-danger'>First name is required</span>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="" htmlFor="lname">Last name</label>
                        <input type="text" className="form-control" id="lname" {...register('lname', { required: true })}/>
                        {errors.lname && <span className='text-danger'>Last name is required</span>}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" {...register('email', { required: true })}/>
                    {errors.email && <span className='text-danger'>Email is required</span>}
                  </div>

                  <div className="form-group">
                    <label className="" htmlFor="message">Message</label>
                    <textarea name="" className="form-control" id="message" cols="30" rows="5" {...register('message', { required: true })}></textarea>
                    {errors.message && <span className='text-danger'>Message is required</span>}
                  </div>

                  <button type="submit" className="btn btn-primary">
                  <span className="indicator-label" ref={btnRef1} >
                  <span className=' d-flex align-items-center'>                  Send Message
                  <i className="ki-duotone ki-arrow-right fs-2 me-0 ms-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                  </i></span>

                  </span>
          
              <span ref={btnRef2} className="indicator-progress">
                  Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>

                  </button>
                </form>
              </div>
              <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="quick-contact">
                  <h3 className="h5 mb-4">Contact Info</h3>
                  <address className="text-black d-flex"><span className="mt-1 icon-room mr-2"></span><span>50 Raymouth Rd. Baltemoer, London 4000</span></address>
                  <ul className="list-unstyled ul-links mb-4">
                    <li><a href="tel://11234567890" className="d-flex"><span className="mt-1 icon-phone mr-2"></span><span>+216 12 345 678</span></a></li>

                    <li><a href="tel://11234567890" className="d-flex"><span className="mt-1 icon-phone mr-2"></span><span>+216 12 345 678</span></a></li>

                    <li><a href="mailto:info@mydomain.com" className="d-flex"><span className="mt-1 icon-envelope mr-2"></span><span>info-CutMaster@CMC.com</span></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer">

          <div className="footer-dots"></div>
          <div className="container">

            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h3>About CutMaster<span className="text-primary">.</span> </h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="widget">
                  <h3>Follow Us</h3>
                  <ul className="list-unstyled social">
                    <li><a href="#"><span className="icon-instagram"></span></a></li>
                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                    <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    <li><a href="#"><span className="icon-pinterest"></span></a></li>
                    <li><a href="#"><span className="icon-dribbble"></span></a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 ml-auto">
                <div className="widget">
                  <h3>Projects</h3>
                  <ul className="list-unstyled float-left links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="widget">
                  <h3>Services</h3>
                  <ul className="list-unstyled float-left links">
                    <li><a href="#">Precision Cutting Technology</a></li>
                    <li><a href="#">Wide Selection of Materials</a></li>
                    <li><a href="#">Customizable Designs</a></li>
                    <li><a href="#">Instant Cost Estimation</a></li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-3">
                <div className="widget">
                  <h3>Quick Contact</h3>
                  <address>50 Raymouth Rd. Baltemoer, London 4000</address>
                  <ul className="list-unstyled links mb-4">
                    <li><a href="tel://11234567890">+216 12 345 678</a></li>
                    <li><a href="tel://11234567890">+216 12 345 678</a></li>
                    <li><a href="mailto:info-CutMaster@CMC.com">info-CutMaster@CMC.com</a></li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="row mt-5">
              <div className="col-12 text-center">
                <p className="copyright">CutMaster Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Homevitrine;