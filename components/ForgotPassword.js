import React, { useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { passwordResetEmail } = useAuth();
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await passwordResetEmail(email);
      setSuccess("Email sent!");
    } catch (error) {
      console.log(email);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Card>
      <h2 className="text-center mb-4">Forgot Password</h2>
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Loggin in..." : "Submit"}
          </Button>
        </Form>
        <hr />

        <p className="text-muted mb-4 ">
          Doesn't have an account ? <Link href="/sign-up">Create account</Link>
        </p>
        <p className="text-muted mb-4 ">
          Have an Account? <Link href="/">Sign in</Link>
        </p>
      </Card.Body>
    </Card>
  );
}
