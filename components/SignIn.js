import React, { useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin, currentUser } = useAuth();
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signin(email, password);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Card>
      <h2 className="text-center mb-4">Sign In</h2>
      <Card.Body>
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
          <Link href="/forgot-password">Forgot Password</Link>
        </p>
      </Card.Body>
    </Card>
  );
}
