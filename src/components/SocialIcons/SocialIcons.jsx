import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/ioanniskavalidis/">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a href="https://github.com/Ioannis-Kavalidis">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://twitter.com/ioaniskavalidis">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </div>
);

export default SocialIcons;
