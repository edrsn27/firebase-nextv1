import React from "react";
import SignUp from "../components/SignUp";
import { Container } from "react-bootstrap";

export default function Index() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container>
  );
}
