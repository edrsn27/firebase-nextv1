import React, { useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import Link from "next/link";
function SuccessMessage() {
  return (
    <>
      Account created! <br />
      <Link href="/">Login Page</Link>. Give it a click if you want to login.
    </>
  );
}

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const submit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (password == "") return setError("Password field required!");
    if (password != confirmPassword) return setError("Password doesn't match");

    setLoading(true);

    try {
      await signup(email, password);
      setSuccess(<SuccessMessage />);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return (
    <Card>
      <h2 className="text-center mb-4">Sign up</h2>

      <Card.Body>
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confrim password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
