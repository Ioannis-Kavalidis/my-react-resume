import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => (
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/ioanniskavalidis/"></a>
        <FontAwesomeIcon icon={faLinkedinIn} />
        &nbsp; https://www.linkedin.com/in/ioanniskavalidis/ &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <a href="https://github.com/Ioannis-Kavalidis"></a>&nbsp;
        <FontAwesomeIcon icon={faGithub} /> https://github.com/Ioannis-Kavalidis &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp;
        <a href="https://twitter.com/ioaniskavalidis"></a>
        <FontAwesomeIcon icon={faTwitter} />
        &nbsp; https://twitter.com/ioaniskavalidis
    </div>

    // <div className="social-icons">
    //     <a href="https://www.linkedin.com/in/ioanniskavalidis/">
    //         <FontAwesomeIcon icon={faLinkedinIn} />
    //     </a>
    //     <a href="https://github.com/Ioannis-Kavalidis">
    //         <FontAwesomeIcon icon={faGithub} />
    //     </a>
    //     <a href="https://twitter.com/ioaniskavalidis">
    //         <FontAwesomeIcon icon={faTwitter} />
    //     </a>
    // </div>
);

export default SocialIcons;
