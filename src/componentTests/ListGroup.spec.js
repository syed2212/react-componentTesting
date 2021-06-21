import React, { useState } from "react";
import { mount } from "@cypress/react";
import ListGroup from "../components/common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function ListGroupComponent(props) {
  const [selectedGenre, setselectedGenre] = useState();

  const handleGenreSelect = (genre) => {
    setselectedGenre(genre);
  };
  return (
    <ListGroup
      items={getGenres()}
      selectedItem={selectedGenre}
      onItemSelect={handleGenreSelect}
    />
  );
}

export default ListGroupComponent;

describe("List group component", () => {
  beforeEach(() => {
    mount(<ListGroupComponent />);
  });
  it("verify the length of list group component", () => {
    cy.get('[data-cy="list-group"]')
      .get("li")
      .should("have.length", getGenres().length);
  });
  it("verify the active class in list group component", () => {
    cy.get('[data-cy="list-group"]')
      .get("li")
      .eq(0)
      .click()
      .should("have.class", "list-group-item active");
  });
});
