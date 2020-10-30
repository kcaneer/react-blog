import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="container py-4 brand col-lg-12 fixed-bottom bg-dark">
            <div className="row">
                <div className="col-4">
                    <p className="m-0 text-center text-white">
                    <FontAwesomeIcon icon={ faLinkedin }/>
                        <i className="fab fa-linkedin"></i>
                        <a className="text-white" href="https://www.linkedin.com/in/kennedy-caneer-971a00167/"
                            target="_blank"> LinkedIn</a>
                    </p>
                </div>
                <div className="col-4">
                    <p className="m-0 text-center text-white">
                    <FontAwesomeIcon icon={ faGithub }/>
                        <i className="fab fa-github"></i>
                        <a className="text-white" href="https://github.com/kcaneer" target="_blank"> GitHub</a>
                    </p>
                </div>
                <div className="col-4">
                    <p className="m-0 text-center text-white">
                    <FontAwesomeIcon icon={ faEnvelope }/>
                        <i className="fas fa-envelope"></i>
                        <a className="text-white" href="mailto: kcaneer@gmail.com" target="_blank"> Email</a>
                    </p>
                </div>
            </div>
        </div>
    )
}



export default Footer