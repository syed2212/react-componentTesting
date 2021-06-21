import React, { useState } from "react";
import { mount } from "@cypress/react";
import Pagination from "../components/common/pagination";
import "bootstrap/dist/css/bootstrap.css";

function PaginationComponent() {
  const [currentPage, setcurrentPage] = useState(1);
  return (
    <Pagination
      itemsCount={20}
      pageSize={5}
      currentPage={currentPage}
      onPageChange={(value) => setcurrentPage(value)}
    />
  );
}

describe("Pagination component", () => {
  beforeEach(() => {
    mount(<PaginationComponent />);
  });

  it("verify Pagination component length", () => {
    cy.get('[data-cy="pagination"]').get("li").should("have.length", 4);
  });
  it("veriffy pagination component has class active", () => {
    cy.get('[data-cy="pagination"]')
      .get("li")
      .eq(0)
      .should("have.class", "active");
  });
  it("verify pagination component changes active css accordingly", () => {
    cy.get('[data-cy="pagination"]')
      .get("li")
      .eq(2)
      .click()
      .should("have.class", "active");
  });
});
