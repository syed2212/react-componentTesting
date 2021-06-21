import React, { useState } from "react";
import { mount } from "@cypress/react";
import Like from "../components/common/like";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default function LikeComponent(props) {
  const [isLiked, setisLiked] = useState(false);
  return <Like liked={isLiked} onClick={() => setisLiked(!isLiked)} />;
}

it("verify that like component works fine", () => {
  mount(<LikeComponent />);
  cy.get('[data-cy="like-component"]')
    .should("have.class", "fa fa-heart-o")
    .click()
    .should("have.class", "fa fa-heart");
});
