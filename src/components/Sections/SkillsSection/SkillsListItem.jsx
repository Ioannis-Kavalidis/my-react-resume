import React, { Fragment } from "react";
import { string } from "prop-types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsListItem = ({ item }) => (
  <Fragment>
    <li>
      <FontAwesomeIcon icon={faCheck} />
      {item}
    </li>
  </Fragment>
);

SkillsListItem.propTypes = {
  item: string.isRequired,
};

export default SkillsListItem;
