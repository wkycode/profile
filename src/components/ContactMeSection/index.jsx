import React from 'react'

import { FaInstagram, FaLinkedin, FaFacebookF, FaHome, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { ContactMeContainer, ContactMeH1, ContactMeWrapper, BtnWrap } from './ContactMeElements'

const ContactMeSection = () => (
  <ContactMeContainer id="contact-me">
    <ContactMeH1>Contact Me</ContactMeH1>

    <div className="d-flex w-100 justify-content-center">
      <section className="mb-4">

        <a id="btn" className="btn btn-outline-light btn-floating m-1" href="https://github.com/wkycode" role="button">
          <FiGithub />
        </a>

        <a id="btn" className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/kayu-james-wu-21767521b" role="button">
          <FaLinkedin />
        </a>

        <a id="btn" className=" btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/james.wky.5/" role="button">
          <FaFacebookF />
        </a>

        <a id="btn" className=" btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/wkyjames/" role="button">
          <FaInstagram />
        </a>

      </section>
    </div>

    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 id="footer-title" className="text-uppercase fw-bold fs-1 mb-4 text-white">
            WKY James
          </h6>
          <p className="text-white">
            Prior to stepping into this industry, I used to be in real-estate and a full-time Twitch & YouTube content creator. Familiar with OBS live streaming software and Video Editing Software (Davinici Resolve).
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 id="footer-title" className="text-uppercase fw-bold mb-4 text-white">
            Projects
          </h6>
          <p>
            <a href="https://github.com/wkycode/Project1" className="text-white">Retro-Gaming</a>
          </p>
          <p>
            <a href="https://github.com/wkycode/Project2" className="text-white">IG-Clone</a>
          </p>
          <p>
            <a href="https://github.com/wkycode/project3" className="text-white">Ecommerce</a>
          </p>
          <p>
            <a href="https://github.com/wkycode/unit-4-mobileApp" className="text-white">Yotube-ViewBoosting App</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 id="footer-title" className="text-uppercase fw-bold mb-4 text-white">
            FrameWork
          </h6>
          <p>
            <a href="https://nextjs.org/" className="text-white">Next-Js</a>
          </p>
          <p>
            <a href="https://reactjs.org/" className="text-white">React</a>
          </p>
          <p>
            <a href="https://reactnative.dev/" className="text-white">React-Native</a>
          </p>
          <p>
            <a href="https://vuejs.org/" className="text-white">Vue-Js(In progress)</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 id="footer-title" className="text-uppercase fw-bold mb-4 text-white">
            Contact
          </h6>

          <p className="text-white">
            <FaHome className="mr-2" />
            Lohas Park, TKO, NT
          </p>

          <p>
            <a href="mailto:misterwky@gmail.com" className="text-white">
              <MdEmail className="mr-2" />
              misterwky@gmail.com
            </a>
          </p>

          <p className="text-white">
            <FaPhoneAlt className="mr-2" />
            +852 6560 4933
          </p>

          <p className="text-white">
            <FaWhatsapp className="mr-2" />
            +852 6560 4933
          </p>
        </div>

      </div>

    </div>
    {/* <ContactMeWrapper> */}
    {/* </ContactMeWrapper> */}
  </ContactMeContainer>
)

export default ContactMeSection
