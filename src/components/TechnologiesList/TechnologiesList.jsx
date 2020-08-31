import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faNpm,
  faNodeJs,
  faReact,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const TechnologiesList = () => (
  <ul className="list-inline technologies-list">
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faHtml5} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faCss3Alt} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faJsSquare} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faReact} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faNodeJs} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faSass} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faWordpress} />
    </li>
    <li className="list-inline-item">
      <FontAwesomeIcon icon={faNpm} />
    </li>
  </ul>
);

export default TechnologiesList;
