import React from 'react';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
    <span> Edwin Oyunge</span>
                </h1>
                <p className="h-sub-text">To improve the effectiveness of your software
                engineer resume you need to start it with a
    powerful objective statement.</p>
                <div className="icons">
                    {/* <Link to="" className="icon-holder"> */}
                    <a className="icon-holder" href="https://www.facebook.com/"> 
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    {/* </Link> */}
                    {/* <Link to="test" className="icon-holder"> */}
                    <a className="icon-holder" href="https://github.com/">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    {/* </Link> */}
                    {/* <Link to="test" className="icon-holder"> */}
                    <a className="icon-holder" href="https://ke.linkedin.com/">

                        <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
                    </a>

                    {/* </Link>        */}
                </div>
            </header>
        </div>
    )
}

export default HomePage
// cubic bazier.com for animation