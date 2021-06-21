import React, { useState } from "react";
import { mount } from "@cypress/react";
import Table from "../components/common/table";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function TableComponent() {
  const columns = [
    {
      path: "title",
      label: "Title",
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
  ];
  const [sortColumn, setsortColumn] = useState({
    path: "title",
    order: "desc",
  });
  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  return (
    <Table
      columns={columns}
      data={getMovies()}
      sortColumn={sortColumn}
      onSort={handleSort}
    />
  );
}

describe("Pagination component", () => {
  beforeEach(() => {
    mount(<TableComponent />);
  });
  it("verify Table component length", () => {
    cy.get('[data-cy="table-body"]')
      .get("tbody")
      .get("tr")
      .should("have.length", getMovies().length + 1);
  });
  it("verify table component headers", () => {
    cy.get('[data-cy="table-body"]')
      .get("tr")
      .eq(0)
      .get("th")
      .eq(0)
      .should("have.text", "Title ");
    cy.get('[data-cy="table-body"]')
      .get("tr")
      .eq(0)
      .get("th")
      .eq(1)
      .should("have.text", "Genre ");
    cy.get('[data-cy="table-body"]')
      .get("tr")
      .eq(0)
      .get("th")
      .eq(2)
      .should("have.text", "Stock ");
    cy.get('[data-cy="table-body"]')
      .get("tr")
      .eq(0)
      .get("th")
      .eq(3)
      .should("have.text", "Rate ");
  });
});
