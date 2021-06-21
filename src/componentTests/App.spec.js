import React from "react";
import { mount } from "@cypress/react";
import App from "../App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

it("renders learn react link", () => {
  mount(<App />);
});
