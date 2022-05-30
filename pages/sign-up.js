import React from "react";
import SignUpComponent from "../components/SignUp";
import { Container } from "react-bootstrap";

export default function SignUp() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUpComponent />
      </div>
    </Container>
  );
}
