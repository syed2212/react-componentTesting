import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      data-cy="like-component"
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    />
  );
};

export default Like;
